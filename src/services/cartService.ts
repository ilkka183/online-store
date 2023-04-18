import EntityService, { Entity } from "./entityService";
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

class CartService extends EntityService<CartItem> {
}

export default new CartService("carts", data);
