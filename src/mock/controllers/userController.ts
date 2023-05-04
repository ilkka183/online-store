import { Response } from 'miragejs';
import Controller from "../controller";
import Table from "../table";
import { User, SignInData, SignUpData } from "../../services/userService";
import defaultData from "../data/userData";

export default class UserController extends Controller<User> {

  constructor() {
    super("user", defaultData);
  }

  private toDTO(user: User): Partial<User> {
    return { ...user, password: undefined }
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
    } as User);

    return new Response(201, {}, this.toDTO(newEntity));
  }

}
