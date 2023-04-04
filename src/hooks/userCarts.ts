import useData from "./useData";

export interface CartItem {
  productId: number;
  quantity: number;
}

export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: CartItem[];
}

function useCarts(id?: number) {
  let endpoint = "/carts";

  if (id)
    endpoint += "/" + id;

  return useData<Cart>(endpoint);
}

export default useCarts;