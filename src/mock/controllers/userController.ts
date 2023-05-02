import Controller from "../controller";
import { User } from "../../services/userService";
import data from "../data/userData";

export default class UserController extends Controller<User> {

  constructor() {
    super("users", data);
  }

  public getByEmail(email: string): User | null {
    const data = this.getData();

    const entity = data.find(item => item.email == email);

    return entity ? entity : null;
  }

}
