import service, { Cart } from "../../services/cartService";
import useGet from "../useGet";
import { KEY_CART_ITEMS } from "../queryKey";

export default function useCart(userId: number) {
  const result = useGet<Cart>(KEY_CART_ITEMS(userId), () => service.get(userId));
  
  const cart = result.data ? result.data : { id: 0, items: [] };

  return {...result, cart};
}
