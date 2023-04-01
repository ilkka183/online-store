import useData from "./useData";

export interface Product {
  id: number;
  title: string;
}

function useProducts() {
  return useData<Product>("/products");
}

export default useProducts;