import APIClient, { Entity } from "./apiClient";

export interface Cart extends Entity {
  id: number;
  items: CartItem[];
}

export interface CartItem extends Entity {
  id: number;
  price: number;
  currency: string;
  name: string;
  description: string;
  quantity: number;
  image: string;
}

class CartAPI extends APIClient<Cart> {
}

export default new CartAPI("/carts");
