import service, { Cart } from "../../services/cartService";
import useReplaceSingle from "../useReplaceSingle";
import { KEY_CART_ITEMS } from "../queryKey";

export default function useReplaceCart(userId: number) {
  return useReplaceSingle<Cart>(KEY_CART_ITEMS(userId), service.put);
}
