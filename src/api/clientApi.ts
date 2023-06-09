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

export interface Client extends Entity {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

class ClientAPI extends APIClient<Client> {

  public signIn = (data: SignInData) => {
    return this.client.post<Partial<Client>>(this.endpoint + "/signin", data).then(res => res.data);
  }

  public signUp = (data: SignUpData) => {
    return this.client.post<Partial<Client>>(this.endpoint + "/signup", data).then(res => res.data);
  }

}

export default new ClientAPI("/clients");
