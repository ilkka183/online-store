import APIClient, { Entity } from "./apiClient";

export interface Category extends Entity {
  id: number;
  name: string;
}

export default new APIClient<Category>("/categories");
