import service from "../services/cartService";
import useDelete from "./useDelete";

export default function useCartDelete() {
  return useDelete(['carts'], service.delete);
}
