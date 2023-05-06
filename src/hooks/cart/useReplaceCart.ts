import api, { Cart } from "../../api/cartApi";
import useReplaceSingle from "../useReplaceSingle";
import { KEY_CART } from "../queryKey";

export default function useReplaceCart(clientId: number) {
  return useReplaceSingle<Cart>(KEY_CART(clientId), api.put);
}
