import Controller from "../controller";
import Table from "../table";
import { Product } from "../../services/productService";
import data from "../data/productData";

export default class ProductController extends Controller<Product> {

  constructor() {
    super("product", data);
  }

  public getProducts(query: Record<string, string>): Product[] {
    const table = new Table(this);

    if (query.categoryId)
      return table.data.filter(item => item.categoryId.toString() === query.categoryId);

    return table.data;
  }

}
