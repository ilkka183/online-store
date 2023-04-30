import { Cart } from "../services/cartService";
import { EntityId } from "../services/apiClient";
import MockTable from "./mockTable";
import data from "./data/cartData";

export default class CartTable extends MockTable<Cart> {

  constructor() {
    super("carts", data);
  }

  public getCart(id: EntityId): Cart | null {
    const data = this.getData();

    return this.find(data, id);
  }

  public setCart(id: EntityId, cart: Cart): Cart | null {
    const data = this.getData();

    const newData = data.map(item => item.id == id ? cart : item);
    this.setData(newData);

    return this.find(data, id);
  }

}
