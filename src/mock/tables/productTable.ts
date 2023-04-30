import MockTable from "../mockTable";
import { Product } from "../../services/productService";
import data from "../data/productData";

export default class ProductTable extends MockTable<Product> {

  constructor() {
    super("products", data);
  }

}
