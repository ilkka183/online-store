import { MutationFunction, QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { Entity, EntityId, UpdateEntity } from "../api/apiClient";

interface UpdateContext<T> {
  previousData: T[]
}

export default function useUpdate<T extends Entity>(queryKey: QueryKey, mutationFn: MutationFunction<T, UpdateEntity<T>>) {
  const queryClient = useQueryClient();

  const result = useMutation<T, Error, UpdateEntity<T>, UpdateContext<T>>({
    mutationFn,

    onMutate: (input: UpdateEntity<T>) => {
      // Optimistic update
      const previousData = queryClient.getQueryData<T[]>(queryKey) || [];

      queryClient.setQueryData<T[]>(queryKey, (items => items?.map(item => item.id === input.id ? {...item, ...input.data} : item)));

      return { previousData }
    },

    onError: (error, input, context) => {
      if (!context)
        return;
      
      queryClient.setQueryData<T[]>(queryKey, context.previousData);
    },
  });

  const updateItem = (id: EntityId, data: Partial<T>) => result.mutate({ id, data });

  return { ...result, updateItem }
}
