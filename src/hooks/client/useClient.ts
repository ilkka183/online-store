import useGet from "../useGet";
import api, { Client } from "../../services/clientService";
import { KEY_CLIENTS } from "../queryKey";

export default function useClient(email: string) {
  return useGet<Client>(KEY_CLIENTS(), () => api.getByEmail(email));
}
