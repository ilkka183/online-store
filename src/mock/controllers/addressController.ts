import Controller from "../controller";
import Table from "../table";
import { Entities } from "../../api/apiClient";
import { Address } from "../../api/addressApi";
import defaultData from "../data/addressData";

export default class AddressController extends Controller<Address> {

  constructor() {
    super("address", defaultData);
  }

  public getOf(clientId: number): Entities<Address> {
    const table = new Table(this);

    const data = table.data.filter(item => item.clientId === clientId);

    return { count: data.length, data }
  }

}
