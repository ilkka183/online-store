import useGetAll from "../useGetAll";
import api, { Address } from "../../api/addressApi";
import { KEY_ADDRESSES } from "../queryKey";

export default function useAddresses(clientId: number) {
  return useGetAll<Address>(KEY_ADDRESSES(clientId), () => api.fetchAllById(clientId));
}
