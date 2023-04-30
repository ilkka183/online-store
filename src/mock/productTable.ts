import { Product } from "../services/productService";
import MockTable from "./mockTable";
import data from "./data/productData";

export default class ProductTable extends MockTable<Product> {

  constructor() {
    super("products", data);
  }

}
