import MockTable from "../mockTable";
import { User } from "../../services/userService";
import data from "../data/userData";

export default class UserTable extends MockTable<User> {

  constructor() {
    super("users", data);
  }

}
