import useData from "./useData";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

function useUsers() {
  let endpoint = "/users";

  return useData<User>(endpoint);
}

export default useUsers;