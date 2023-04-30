import service, { Cart } from "../../services/cartService";
import useReplace from "../useReplace";
import { KEY_CART_ITEMS } from "../queryKey";

export default function useReplaceCart(userId: number) {
  return useReplace<Cart>(KEY_CART_ITEMS(userId), service.put);
}
