import useData from "./useData";

export interface Cart {
  id: string;
  price: number;
  currency: string;
  name: string;
  description: string;
  quantity: number;
  imageUrl: string;
}

function useCarts() {
  let endpoint = "/carts";

  return useData<Cart>(endpoint);
}

export default useCarts;