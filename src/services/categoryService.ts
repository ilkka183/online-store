import EntityService, { Entity } from "./entityService";
import data from "../data/categoryData";

export interface Category extends Entity {
  id: number;
  name: string;
}

class CategoryService extends EntityService<Category> {
}

export default new CategoryService("categories", data);
