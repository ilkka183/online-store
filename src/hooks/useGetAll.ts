import { QueryFunction, QueryKey, useQuery } from "@tanstack/react-query";
import { Entities } from "../api/apiClient";

export default function useGetAll<T>(queryKey: QueryKey, queryFn: QueryFunction<Entities<T>, QueryKey>) {
  return useQuery<Entities<T>, Error>({
    queryKey,
    queryFn,
    staleTime: 10 * 1000
  });
}
