import service, { CartItem } from "../../services/cartService";
import useUpdate from "../useUpdate";
import keyOf from "./cartItemKey";

export default function useUpdateCartItem(userId: number) {
  return useUpdate<CartItem>(keyOf(userId), service.patch);
}
