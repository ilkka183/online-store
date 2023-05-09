import useGetAll from "../useGetAll";
import api, { ClientAddress } from "../../api/clientAddressApi";
import { KEY_CLIENT_ADDRESSES } from "../queryKey";

export default function useClients(clientId: number) {
  return useGetAll<ClientAddress>(KEY_CLIENT_ADDRESSES(clientId), () => api.fetchAllById(clientId));
}
