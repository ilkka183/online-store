import useGetAll from "../useGetAll";
import api, { Category } from "../../services/categoryService";
import { KEY_CATEGORIES } from "../queryKey";

export default function useCategories() {
  return useGetAll<Category>(KEY_CATEGORIES(), api.getAll);
}
