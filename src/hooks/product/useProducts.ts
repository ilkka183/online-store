import useGetAll from "../useGetAll";
import api, { Product, ProductQuery } from "../../api/productApi";
import { KEY_PRODUCTS } from "../queryKey";

export default function useProducts(query: ProductQuery) {
  return useGetAll<Product>(KEY_PRODUCTS(query), () => api.fetchProducts(query));
}
