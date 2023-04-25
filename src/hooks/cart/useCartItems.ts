import service, { CartItem } from "../../services/cartService";
import useGetAll from "../useGetAll";
import keyOf from "./cartItemKey";

export default function useCartItems(userId: number) {
  return useGetAll<CartItem>(keyOf(userId), service.getAll);
}
