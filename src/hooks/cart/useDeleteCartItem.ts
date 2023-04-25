import service, { CartItem } from "../../services/cartService";
import useDelete from "../useDelete";
import keyOf from "./cartItemKey";

export default function useDeleteCartItem(userId: number) {
  return useDelete<CartItem>(keyOf(userId), service.delete);
}
