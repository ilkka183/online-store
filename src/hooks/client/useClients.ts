import useGetAll from "../useGetAll";
import api, { Client } from "../../api/clientApi";
import { KEY_CLIENTS } from "../queryKey";

export default function useClients() {
  return useGetAll<Client>(KEY_CLIENTS(), api.getAll);
}
