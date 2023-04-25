import { MutationFunction, QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { Entity, UpdateEntity } from "../services/apiClient";

interface UpdateContext<T> {
  previousData: T[]
}

export default function useUpdate<T extends Entity>(queryKey: QueryKey, mutationFn: MutationFunction<T, UpdateEntity<T>>) {
  const queryClient = useQueryClient();

  return useMutation<T, Error, UpdateEntity<T>, UpdateContext<T>>({
    mutationFn,

    onMutate: (variables: UpdateEntity<T>) => {
      const previousData = queryClient.getQueryData<T[]>(queryKey) || [];

      queryClient.setQueryData<T[]>(queryKey, (items => items?.map(item => item.id === variables.id ? {...item, ...variables.data} : item)));

      return { previousData }
    },

    onError: (error, variables, context) => {
      if (!context)
        return;
        
      queryClient.setQueryData<T[]>(queryKey, context.previousData);
    },
  });
}
