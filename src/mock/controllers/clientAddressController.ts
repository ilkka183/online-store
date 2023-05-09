import Controller from "../controller";
import Table from "../table";
import { Entities } from "../../api/apiClient";
import { ClientAddress } from "../../api/clientAddressApi";
import defaultData from "../data/clientAddressData";

export default class ClientAddressController extends Controller<ClientAddress> {

  constructor() {
    super("clientAddress", defaultData);
  }

  public getOf(clientId: number): Entities<ClientAddress> {
    const table = new Table(this);

    const data = table.data.filter(item => item.clientId === clientId);

    return { count: data.length, data }
  }

}
