import useGetAll from "../useGetAll";
import api, { User } from "../../services/userService";
import { KEY_USERS } from "../queryKey";

export default function useUsers() {
  return useGetAll<User>(KEY_USERS(), api.getAll);
}
