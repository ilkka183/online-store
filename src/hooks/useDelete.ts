import { MutationFunction, QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { Entity, EntityId } from "../services/apiClient";

interface DeleteContext<T> {
  previousData: T[]
}

export default function useDelete<T extends Entity>(queryKey: QueryKey, mutationFn: MutationFunction<T, EntityId>) {
  const queryClient = useQueryClient();

  return useMutation<T, Error, EntityId, DeleteContext<T>>({
    mutationFn,

    onMutate: (id: EntityId) => {
      const previousData = queryClient.getQueryData<T[]>(queryKey) || [];

      queryClient.setQueryData<T[]>(queryKey, (items => items?.filter(item => item.id !== id)));

      return { previousData }
    },

    onError: (error, id, context) => {
      if (!context)
        return;
        
      queryClient.setQueryData<T[]>(queryKey, context.previousData);
    },
  });
}
