import EntityService, { Entity } from "./entityService";

export interface User extends Entity {
  id: number;
  firstName: string;
  lastName: string;
}

class UserService extends EntityService<User> {
  protected name(): string { return "users"; }
}

export default new UserService();
