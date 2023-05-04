import useGet from "../useGet";
import api, { Client } from "../../services/clientService";
import { KEY_CLIENTS } from "../queryKey";

export default function useClient(id: number) {
  return useGet<Client>(KEY_CLIENTS(), () => api.get(id));
}
