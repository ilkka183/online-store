import Controller from "../controller";
import { Product } from "../../services/productService";
import data from "../data/productData";

export default class ProductController extends Controller<Product> {

  constructor() {
    super("products", data);
  }

}
