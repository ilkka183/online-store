import EntityService, { Entity } from "./entityService";

export interface User extends Entity {
  firstName: string;
  lastName: string;
}

class UserService extends EntityService<User> {
}

export default new UserService("/users");
