import APIClient, { Entity } from "./apiClient";
import data from "../data/categoryData";

export interface Category extends Entity {
  id: number;
  name: string;
}

export default new APIClient<Category>("/categories", data);
