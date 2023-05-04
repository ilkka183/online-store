import APIClient, { Entity } from "./apiClient";

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password1: string;
  password2: string;
}

export interface User extends Entity {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

class UserAPI extends APIClient<User> {

  public getByEmail = (email: string) => {
    return this.client.get<User>(this.endpoint + "/signin/" + email).then(res => res.data);
  }

  public signIn = (data: SignInData) => {
    return this.client.post<Partial<User>>(this.endpoint + "/signin", data).then(res => res.data);
  }

  public signUp = (data: SignUpData) => {
    return this.client.post<User>(this.endpoint + "/signup", data).then(res => res.data);
  }

}

export default new UserAPI("/users");
