import EntityService, { Entity } from "./entityService";
import data from "../data/productData";

export interface ProductQuery {
  categoryId?: number;
  searchText: string;
}

interface Rating {
  rate: number;
  count: number;
}

export interface Product extends Entity {
  id: string;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
  rating: Rating;
}

class ProductService extends EntityService<Product> {
  public useProducts(productQuery: ProductQuery) {
    let endpoint = this.endpoint();
  
    if (productQuery?.categoryId)
      endpoint += "/category/" + productQuery?.categoryId;
  
    return this.useOf(endpoint, [productQuery]);
  }
}

export default new ProductService("products", data);
