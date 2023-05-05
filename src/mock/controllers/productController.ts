import Controller from "../controller";
import Table from "../table";
import { Product } from "../../services/productService";
import { Entities } from "../../services/apiClient";
import data from "../data/productData";

export default class ProductController extends Controller<Product> {

  constructor() {
    super("product", data);
  }

  public getProducts(query: Record<string, string>): Entities<Product> {
    const table = new Table(this);

    let data = table.data;

    if (query.categoryId) {
      data = data.filter(item => item.categoryId.toString() === query.categoryId);
    }

    return { count: data.length, data }
  }

}
