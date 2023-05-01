import Controller from "../controller";
import { Category } from "../../services/categoryService";
import data from "../data/categoryData";

export default class CategoryController extends Controller<Category> {

  constructor() {
    super("categories", data);
  }

}
