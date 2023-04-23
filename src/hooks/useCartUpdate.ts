import { useMutation, useQueryClient } from "@tanstack/react-query";
import cartService, { CartItem } from "../services/cartService";

export default function useCartUpdate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cartService.patch,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['carts'] })
    },
  });
}
