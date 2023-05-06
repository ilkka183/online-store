import { MutationFunction, QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { Entity, EntityId, ReplaceEntity } from "../api/apiClient";

interface ReplaceContext<T> {
  previousData: T[]
}

export default function useReplace<T extends Entity>(queryKey: QueryKey, mutationFn: MutationFunction<T, ReplaceEntity<T>>) {
  const queryClient = useQueryClient();

  const result = useMutation<T, Error, ReplaceEntity<T>, ReplaceContext<T>>({
    mutationFn,

    onMutate: (input: ReplaceEntity<T>) => {
      // Optimistic replace
      const previousData = queryClient.getQueryData<T[]>(queryKey) || [];

      queryClient.setQueryData<T[]>(queryKey, (items => items?.map(item => item.id === input.id ? input.data : item)));

      return { previousData }
    },

    onError: (error, input, context) => {
      if (!context)
        return;
      
      queryClient.setQueryData<T[]>(queryKey, context.previousData);
    },
  });

  const replaceItem = (id: EntityId, data: T) => result.mutate({ id, data });

  return { ...result, replaceItem }
}
