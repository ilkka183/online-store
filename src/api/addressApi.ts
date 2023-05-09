import APIClient, { Entity } from "./apiClient";

export interface Address extends Entity {
  id: number;
  clientId: number;
  fullName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
  isDefault: boolean;
}

class AddressAPI extends APIClient<Address> {
}

export default new AddressAPI("/addresses");
