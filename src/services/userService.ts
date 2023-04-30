import APIClient, { Entity } from "./apiClient";

export interface User extends Entity {
  id: number;
  firstName: string;
  lastName: string;
}

export default new APIClient<User>("/users");
