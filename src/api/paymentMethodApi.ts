import APIClient, { Entity } from "./apiClient";

export interface PaymentMethod extends Entity {
  id: number;
  clientId: number;
  cardNumber: string;
  cardHolderName: string;
  expirationMonth: string;
  expirationYear: string;
  isDefault: boolean;
}

class AddressAPI extends APIClient<PaymentMethod> {
}

export default new AddressAPI("/payment-methods");
