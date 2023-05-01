import Controller from "../controller";
import { User } from "../../services/userService";
import data from "../data/userData";

export default class UserController extends Controller<User> {

  constructor() {
    super("users", data);
  }

}
