import Controller from "../controller";
import { Cart } from "../../services/cartService";
import { EntityId } from "../../services/apiClient";
import data from "../data/cartData";

export default class CartController extends Controller<Cart> {

  constructor() {
    super("carts", data);
  }

  public getCart(id: EntityId): Cart | null {
    const data = this.getData();

    return this.find(data, id);
  }

  public setCart(id: EntityId, entity: Cart): Cart | null {
    const data = this.getData();

    const newData = data.map(item => item.id == id ? entity : item);
    this.setData(newData);

    return this.find(data, id);
  }

}
