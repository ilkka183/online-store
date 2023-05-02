import useGet from "../useGet";
import api, { User } from "../../services/userService";
import { KEY_USERS } from "../queryKey";

export default function useUsers(email: string) {
  return useGet<User>(KEY_USERS(), () => api.getByEmail(email));
}
