import useGetAll from "../useGetAll";
import api, { PaymentMethod } from "../../api/paymentMethodApi";
import { KEY_PAYMENT_METHODS } from "../queryKey";

export default function usePaymentMethods(clientId: number) {
  return useGetAll<PaymentMethod>(KEY_PAYMENT_METHODS(clientId), () => api.fetchAllById(clientId));
}
