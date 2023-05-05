import APIClient, { Entity } from "./apiClient";
import QueryBuilder from "./queryBuilder";

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

export interface ProductQuery {
  categoryId?: number;
  minPrice?: number;
  maxPrice?: number;
  searchText: string;
}

class ProductAPI extends APIClient<Product> {

  getProducts = (query: ProductQuery) => {
    const builder = new QueryBuilder(this.endpoint);

    if (query.categoryId)
      builder.addNumber("categoryId", query.categoryId);

    if (query.minPrice)
      builder.addNumber("minPrice", query.minPrice);

    if (query.maxPrice)
      builder.addNumber("maxPrice", query.maxPrice);

    if (query.searchText)
      builder.addString("searchText", query.searchText);

    return this.getAllAt(builder.url);
  }
  
}

export default new ProductAPI("/products");
