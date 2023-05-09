import { QueryKey } from "@tanstack/react-query";
import { ProductQuery } from "../api/productApi";

export const KEY_CATEGORIES = (): QueryKey => ["categories"];
export const KEY_CART = (clientId: number): QueryKey => ["cart", clientId];
export const KEY_PRODUCTS = (query: ProductQuery): QueryKey => ["products", query];
export const KEY_CLIENTS = (): QueryKey => ["clients"];
export const KEY_ORDERS = (clientId: number): QueryKey => ["orders", clientId];
export const KEY_ADDRESSES = (clientId: number): QueryKey => ["addresses", clientId];
export const KEY_PAYMENT_METHODS = (clientId: number): QueryKey => ["paymentMethods", clientId];
