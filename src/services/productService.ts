import APIClient, { Entity } from "./apiClient";
import UrlBuilder from "./urlBuilder";

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
    const url = new UrlBuilder(this.endpoint);

    if (query.categoryId)
      url.addNumber("categoryId", query.categoryId);

    return this.getAllAt(url.text);
  }
  
}

export default new ProductAPI("/products");
