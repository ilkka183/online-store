import Table from "./table";
import { Category } from "../services/categoriyService";

class CategoryTable extends Table<Category> {
  protected name = (): string => "CATEGORIES";

  protected defaultData = (): Category[] => [
    { id: 1, name: "electronics" },
    { id: 2, name: "jewelery" },
    { id: 3, name: "men's clothing" },
    { id: 4, name: "women's clothing" }
  ];
}

export default new CategoryTable;
