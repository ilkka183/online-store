import { Category } from "../services/categoryService";
import MockTable from "./mockTable";
import data from "./data/categoryData";

export default class CategoryTable extends MockTable<Category> {

  constructor() {
    super("categories", data);
  }

}
