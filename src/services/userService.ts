import APIClient, { Entity } from "./apiClient";

export interface User extends Entity {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

class UserAPI extends APIClient<User> {

  public getByEmail = (email: string) => {
    return this.getAt(this.endpoint + "/signin/" + email);
  }

}

export default new UserAPI("/users");
