import EntityService, { Entity } from "./entityService";

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
  protected name(): string { return "carts"; }
}

export default new CartService();
