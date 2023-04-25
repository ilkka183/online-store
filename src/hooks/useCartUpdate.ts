import service from "../services/cartService";
import useUpdate from "./useUpdate";

export default function useCartUpdate() {
  return useUpdate(['carts'], service.patch);
}
