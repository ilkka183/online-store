import APIClient, { Entity } from "./apiClient";

export interface OrderItem {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  discount?: number;
  subTotal: number;
}

export interface Order extends Entity {
  id: number;
  clientId: number;
  date: Date;
  total: number;
  items: OrderItem[];
}

class OrderAPI extends APIClient<Order> {
}

export default new OrderAPI("/orders");
