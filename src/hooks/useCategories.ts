import useData from "./useData";

export interface Category {
  id: number;
  name: string;
}

function useCategories() {
  return useData<Category>("/categories");
}

export default useCategories;