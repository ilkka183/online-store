import Controller from "../controller";
import Table from "../table";
import { Cart } from "../../services/cartService";
import { EntityId } from "../../services/apiClient";
import defaultData from "../data/cartData";

export default class CartController extends Controller<Cart> {

  constructor() {
    super("cart", defaultData);
  }

  public getCart(id: EntityId): Cart | null {
    const table = new Table(this);

    return table.find(id);
  }

  public setCart(id: EntityId, entity: Cart): Cart | null {
    const table = new Table(this);
    table.replace(id, entity);

    return table.find(id);
  }

}
