import Controller from "../controller";
import { Category } from "../../api/categoryApi";
import data from "../data/categoryData";

export default class CategoryController extends Controller<Category> {

  constructor() {
    super("category", data);
  }

}
