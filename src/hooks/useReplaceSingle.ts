import { MutationFunction, QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { Entity, EntityId, ReplaceEntity } from "../api/apiClient";

interface ReplaceContext<T> {
  previousData: T | undefined
}

export default function useReplaceSingle<T extends Entity>(queryKey: QueryKey, mutationFn: MutationFunction<T, ReplaceEntity<T>>) {
  const queryClient = useQueryClient();

  const result = useMutation<T, Error, ReplaceEntity<T>, ReplaceContext<T>>({
    mutationFn,

    onMutate: (input: ReplaceEntity<T>) => {
      // Optimistic replace
      const previousData = queryClient.getQueryData<T>(queryKey);

      queryClient.setQueryData<T>(queryKey, input.data);

      return { previousData }
    },

    onError: (error, input, context) => {
      if (!context)
        return;
      
      queryClient.setQueryData<T>(queryKey, context.previousData);
    },
  });

  const replaceItem = (id: EntityId, data: T) => result.mutate({ id, data });

  return { ...result, replaceItem }
}
