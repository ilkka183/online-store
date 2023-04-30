import APIClient, { Entity } from "./apiClient";

export interface User extends Entity {
  id: number;
  firstName: string;
  lastName: string;
}

class UserAPI extends APIClient<User> {
}

export default new UserAPI("/users");
