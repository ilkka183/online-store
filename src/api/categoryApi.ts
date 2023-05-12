import APIClient, { Entity } from "./apiClient";
import { Category } from "./productApi";

class CategoryAPI extends APIClient<Category> {
}

export default new CategoryAPI("/categories");
