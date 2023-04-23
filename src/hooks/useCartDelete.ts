import { useMutation, useQueryClient } from "@tanstack/react-query";
import cartService, { CartItem } from "../services/cartService";
import { EntityId } from "../services/apiClient";

export default function useCartDelete() {
  const queryClient = useQueryClient();

  return useMutation<CartItem, Error, EntityId>({
    mutationFn: cartService.delete,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['carts'] })
    },
  });
}
