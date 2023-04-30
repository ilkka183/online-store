import { useQuery } from "@tanstack/react-query";
import api, { Product, ProductQuery } from "../../services/productService";
import { KEY_PRODUCTS } from "../queryKey";

export default function useProducts(query: ProductQuery) {
  return useQuery<Product[], Error>({
    queryKey: KEY_PRODUCTS(query),
    queryFn: () => api.getProducts(query),
    staleTime: 10 * 1000
  });
}
