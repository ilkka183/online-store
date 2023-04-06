import useData from "./useData";

export interface ProductQuery {
  categoryId?: number;
  searchText: string;
}

interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
  rating: Rating;
}

function useProducts(productQuery: ProductQuery) {
  let endpoint = "/products";

  if (productQuery?.categoryId)
    endpoint += "/category/" + productQuery?.categoryId;

  return useData<Product>(endpoint, [productQuery]);
}

export default useProducts;