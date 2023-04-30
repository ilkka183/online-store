import { useQuery } from "@tanstack/react-query";
import api, { Category } from "../../services/categoryService";
import { KEY_CATEGORIES } from "../queryKey";

export default function useCategories() {
  return useQuery<Category[], Error>({
    queryKey: KEY_CATEGORIES(),
    queryFn: api.getAll,
    staleTime: 10 * 1000
  });
}
