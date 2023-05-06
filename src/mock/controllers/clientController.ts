import { Response } from 'miragejs';
import Controller from "../controller";
import Table from "../table";
import { Client, SignInData, SignUpData } from "../../api/clientApi";
import defaultData from "../data/clientData";

export default class ClientController extends Controller<Client> {

  constructor() {
    super("client", defaultData);
  }

  private toDTO(client: Client): Partial<Client> {
    return { ...client, password: undefined }
  }

  public signIn(sign: SignInData): Response {
    const table = new Table(this);

    const entity = table.data.find(item => item.email == sign.email);

    if (entity == null)
      return new Response(401, {}, { error: "Invalid email or password" });

    return new Response(200, {}, this.toDTO(entity));
  }

  public signUp(sign: SignUpData): Response {
    const table = new Table(this);

    const entity = table.data.find(item => item.email == sign.email);

    if (entity != null)
        return new Response(409, {}, { error: "Account already exists" });

    const newEntity = this.add({
      id: 0,
      firstName: sign.firstName,
      lastName: sign.lastName,
      email: sign.email,
      password: sign.password1
    } as Client);

    return new Response(201, {}, this.toDTO(newEntity));
  }

}
