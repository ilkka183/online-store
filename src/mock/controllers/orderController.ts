import Controller from "../controller";
import Table from "../table";
import { Entities } from "../../api/apiClient";
import { Order } from "../../api/orderApi";
import defaultData from "../data/orderData";

export default class OrderController extends Controller<Order> {

  constructor() {
    super("order", defaultData);
  }

  public getOf(clientId: number): Entities<Order> {
    const table = new Table(this);

    const data = table.data.filter(item => item.clientId === clientId);

    return { count: data.length, data }
  }

}
