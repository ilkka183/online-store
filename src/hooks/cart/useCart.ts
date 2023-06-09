import useGet from "../useGet";
import api, { Cart } from "../../api/cartApi";
import { KEY_CART } from "../queryKey";

export default function useCart(clientId: number) {
  const result = useGet<Cart>(KEY_CART(clientId), () => api.fetchById(clientId));

  const cart = result.data ? result.data : { id: 0, items: [] } as Cart;

  return {...result, cart};
}
