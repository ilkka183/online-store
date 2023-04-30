import { useQuery } from "@tanstack/react-query";
import api, { User } from "../../services/userService";
import { KEY_USERS } from "../queryKey";

export default function useUsers() {
  return useQuery<User[], Error>({
    queryKey: KEY_USERS(),
    queryFn: api.getAll,
    staleTime: 10 * 1000
  });
}
