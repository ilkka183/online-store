import Table from "./table";
import { User } from "../services/userService";

class UserTable extends Table<User> {
  protected name = (): string => "USERS";

  protected defaultData = (): User[] => [
    {
      id: 1,
      firstName: "John",
      lastName: "Smith"
    },
    {
      id: 2,
      firstName: "jewelery",
      lastName: ""
    },
    {
      id: 3,
      firstName: "men's clothing",
      lastName: ""
    },
    {
      id: 4,
      firstName: "women's clothing",
      lastName: ""
    }
  ];
}

export default new UserTable();
