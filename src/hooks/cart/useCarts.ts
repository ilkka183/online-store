import service, { Cart } from "../../services/cartService";
import useGet from "../useGet";
import { KEY_CART_ITEMS } from "../queryKey";

export default function useCarts(userId: number) {
  return useGet<Cart[]>(KEY_CART_ITEMS(userId), service.getAll);
}
