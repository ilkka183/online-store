import { useQuery } from "@tanstack/react-query";
import api, { Product, ProductQuery } from "../services/productService";

export default function useProducts(query: ProductQuery) {
  return useQuery<Product[], Error>({
    queryKey: ["products", query],
    queryFn: () => api.getProducts(query),
    staleTime: 10 * 1000
  });
}
