import EntityService, { Entity } from "./entityService";

export interface Category extends Entity {
  name: string;
}

class CategoryService extends EntityService<Category> {
}

export default new CategoryService("/categories");
