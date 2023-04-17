import EntityService, { Entity } from "./entityService";
import data from "../data/cartData";

export interface Cart extends Entity {
  id: number;
  price: number;
  currency: string;
  name: string;
  description: string;
  quantity: number;
  imageUrl: string;
}

class CartService extends EntityService<Cart> {
}

export default new CartService("carts", data);
