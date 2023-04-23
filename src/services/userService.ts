import APIClient, { Entity } from "./apiClient";
import data from "../data/userData";

export interface User extends Entity {
  id: number;
  firstName: string;
  lastName: string;
}

export default new APIClient<User>("/users", data);
