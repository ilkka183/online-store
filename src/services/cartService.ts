import EntityService, { Entity } from "./entityService";

export interface Cart extends Entity {
  price: number;
  currency: string;
  name: string;
  description: string;
  quantity: number;
  imageUrl: string;
}

class CartService extends EntityService<Cart> {
}

export default new CartService("/carts");
