import APIClient, { Entity } from "./apiClient";

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

class ProductService extends APIClient<Product> {

  getProducts = (query: ProductQuery) => {
    let endpoint = this.endpoint;

    if (query.categoryId)
      endpoint += "/category/" + query.categoryId;

    return this.getAt(endpoint);
  }
  
}

export default new ProductService("/products");
