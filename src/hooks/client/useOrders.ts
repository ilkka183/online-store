import useGetAll from "../useGetAll";
import api, { Order } from "../../api/orderApi";
import { KEY_ORDERS } from "../queryKey";

export default function useOrders(clientId: number) {
  return useGetAll<Order>(KEY_ORDERS(clientId), () => api.fetchAllById(clientId));
}
