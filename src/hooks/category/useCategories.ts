import useGetAll from "../useGetAll";
import api from "../../api/categoryApi";
import { Category } from "../../api/productApi";
import { KEY_CATEGORIES } from "../queryKey";

export default function useCategories() {
  return useGetAll<Category>(KEY_CATEGORIES(), api.getAll);
}
