import useData from "./useData";

export interface ProductQuery {
  category: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

function useProducts(productQuery: ProductQuery) {
  let endpoint = "/products";

  if (productQuery?.category)
    endpoint += "/category/" + productQuery?.category;

  return useData<Product>(endpoint, [productQuery]);
}

export default useProducts;