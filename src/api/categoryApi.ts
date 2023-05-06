import APIClient, { Entity } from "./apiClient";

export interface Category extends Entity {
  id: number;
  name: string;
}

class CategoryAPI extends APIClient<Category> {
}

export default new CategoryAPI("/categories");
