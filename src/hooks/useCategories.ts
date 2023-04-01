import useData from "./useData";

function useCategories() {
  return useData<string>("/products/categories");
}

export default useCategories;