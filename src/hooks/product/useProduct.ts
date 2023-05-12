import useGet from "../useGet";
import api, { Product } from "../../api/productApi";
import { KEY_PRODUCT } from "../queryKey";

export default function useProduct(id: string) {
  return useGet<Product>(KEY_PRODUCT(id), () => api.fetchById(id));
}
