import { QueryKey } from "@tanstack/react-query";

export const KEY_CART_ITEMS = (userId: number): QueryKey => ["cartItems", userId];
export const KEY_PRODUCTS = (): QueryKey => ["products"];
