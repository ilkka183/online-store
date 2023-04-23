import { useQuery } from "@tanstack/react-query";
import api, { Category } from "../services/categoryService";

export default function useCategories() {
  return useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: api.getAll,
    staleTime: 10 * 1000
  });
}
