import service, { Cart } from "../../services/cartService";
import useReplaceSingle from "../useReplaceSingle";
import { KEY_CART } from "../queryKey";

export default function useReplaceCart(userId: number) {
  return useReplaceSingle<Cart>(KEY_CART(userId), service.put);
}
