import EntityService, { Entity } from "./entityService";
import data from "../data/userData";

export interface User extends Entity {
  id: number;
  firstName: string;
  lastName: string;
}

class UserService extends EntityService<User> {
}

export default new UserService("users", data);
