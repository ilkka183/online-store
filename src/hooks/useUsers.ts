import { useQuery } from "@tanstack/react-query";
import api, { User } from "../services/userService";

export default function useUsers() {
  return useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: api.getAll,
    staleTime: 10 * 1000
  });
}
