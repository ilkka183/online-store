import APIClient, { Entity } from "./apiClient";
import data from "../data/cartData";

export interface CartItem extends Entity {
  id: number;
  price: number;
  currency: string;
  name: string;
  description: string;
  quantity: number;
  image: string;
}

export default new APIClient<CartItem>("/carts", data);
