import { MutationFunction, QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { Entity } from "../api/apiClient";

interface ReplaceContext<T> {
  previousData: T[]
}

export default function useReplace<T extends Entity>(queryKey: QueryKey, mutationFn: MutationFunction<T, T>) {
  const queryClient = useQueryClient();

  const result = useMutation<T, Error, T, ReplaceContext<T>>({
    mutationFn,

    onMutate: (input: T) => {
      // Optimistic add
      const previousData = queryClient.getQueryData<T[]>(queryKey) || [];

      queryClient.setQueryData<T[]>(queryKey, ((items = []) => [...items, input]));

      return { previousData }
    },

    onSuccess: (output: T, input: T) => {
      queryClient.setQueryData<T[]>(queryKey, (items => items?.map(item => item === input ? output : item)));
    },

    onError: (error, input, context) => {
      if (!context)
        return;
      
      queryClient.setQueryData<T[]>(queryKey, context.previousData);
    },
  });

  const addItem = (data: T) => result.mutate(data);

  return { ...result, addItem }
}
