import useGet from "../useGet";
import api, { Client } from "../../api/clientApi";
import { KEY_CLIENTS } from "../queryKey";

export default function useClient(id: number) {
  return useGet<Client>(KEY_CLIENTS(), () => api.fetchById(id));
}
