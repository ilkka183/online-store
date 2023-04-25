import { QueryKey } from "@tanstack/react-query";

export default function keyOf(userId: number): QueryKey {
  return ["cartItems", userId];
}
