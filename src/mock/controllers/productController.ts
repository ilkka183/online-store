import Controller from "../controller";
import Table from "../table";
import { Product } from "../../api/productApi";
import { Entities } from "../../api/apiClient";
import data from "../data/productData";

export default class ProductController extends Controller<Product> {

  constructor() {
    super("product", data);
  }

  public getProducts(query: Record<string, string>): Entities<Product> {
    const table = new Table(this);

    let data = table.data;

    if (query.categoryId) {
      data = data.filter(item => item.category.id.toString() === query.categoryId);
    }

    if (query.title) {
      data = data.filter(item => item.title.match(new RegExp(query.title, 'i')));
    }

    return { count: data.length, data }
  }

}
