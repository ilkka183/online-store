import { QueryFunction, QueryKey, useQuery } from "@tanstack/react-query";

export default function useGet<T>(queryKey: QueryKey, queryFn: QueryFunction<T, QueryKey>) {
  return useQuery<T, Error>({
    queryKey,
    queryFn,
    staleTime: 10 * 1000
  });
}
