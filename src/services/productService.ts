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

class ProductAPI extends APIClient<Product> {

  getProducts = (query: ProductQuery) => {
    let endpoint = this.endpoint;

    if (query.categoryId)
      endpoint += "/category/" + query.categoryId;

    return this.client.get<Product[]>(endpoint).then(res => res.data);
  }
  
}

export default new ProductAPI("/products");
