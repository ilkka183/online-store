import Controller from "../controller";
import Table from "../table";
import { Entities } from "../../api/apiClient";
import { PaymentMethod } from "../../api/paymentMethodApi";
import defaultData from "../data/paymentMethodData";

export default class PaymentMethodController extends Controller<PaymentMethod> {

  constructor() {
    super("paymentMethod", defaultData);
  }

  public getOf(clientId: number): Entities<PaymentMethod> {
    const table = new Table(this);

    const data = table.data.filter(item => item.clientId === clientId);

    return { count: data.length, data }
  }

}
