import EntityService, { Entity } from "./entityService";

export interface Category extends Entity {
  id: number;
  name: string;
}

class CategoryService extends EntityService<Category> {
  protected name(): string { return "categories"; }
}

export default new CategoryService();
