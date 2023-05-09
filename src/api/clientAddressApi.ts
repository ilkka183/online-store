import APIClient, { Entity } from "./apiClient";

export interface ClientAddress extends Entity {
  id: number;
  clientId: number;
  fullName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
}

class ClientAddressAPI extends APIClient<ClientAddress> {
}

export default new ClientAddressAPI("/client-addresses");
