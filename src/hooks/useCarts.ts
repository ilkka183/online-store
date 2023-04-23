import { useQuery } from "@tanstack/react-query";
import api, { CartItem } from "../services/cartService";

export default function useCarts() {
  return useQuery<CartItem[], Error>({
    queryKey: ["carts"],
    queryFn: api.getAll,
    staleTime: 10 * 1000
  });
}
