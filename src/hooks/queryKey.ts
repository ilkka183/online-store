import { QueryKey } from "@tanstack/react-query";
import { ProductQuery } from "../services/productService";

export const KEY_CART_ITEMS = (userId: number): QueryKey => ["cartItems", userId];
export const KEY_CATEGORIES = (): QueryKey => ["categories"];
export const KEY_PRODUCTS = (query: ProductQuery): QueryKey => ["products", query];
export const KEY_USERS = (): QueryKey => ["users"];
