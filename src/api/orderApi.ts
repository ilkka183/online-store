import APIClient, { Entity } from "./apiClient";

export interface Order extends Entity {
  id: number;
  clientId: number;
  total: number;
}

class OrderAPI extends APIClient<Order> {
}

export default new OrderAPI("/orders");
