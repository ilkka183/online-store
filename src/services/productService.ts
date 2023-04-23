import APIClient, { Entity } from "./apiClient";
import data from "../data/productData";

export interface ProductQuery {
  categoryId?: number;
  searchText: string;
}

export interface Rating {
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

class ProductClient extends APIClient<Product> {

  getProducts = (query: ProductQuery) => {
    let endpoint = this.endpoint;

    if (query.categoryId)
      endpoint += "/category/" + query.categoryId;

    return this.getAt(endpoint);
  }
  
}

export default new ProductClient("/products", data);
