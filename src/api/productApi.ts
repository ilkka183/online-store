import APIClient, { Entity, Entities } from "./apiClient";
import QueryBuilder from "./queryBuilder";

export interface Rating {
  rate: number;
  count: number;
}

export interface Category extends Entity {
  id: number;
  name: string;
}

export interface Brand extends Entity  {
  id: number;
  name: string;
}

export interface Product extends Entity {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: Category;
  brand: Brand;
  rating: Rating;
}

export interface ProductQuery {
  brandId?: number;
  categoryId?: number;
  minPrice?: number;
  maxPrice?: number;
  searchText?: string;
}

class ProductAPI extends APIClient<Product> {

  fetchProducts = (query: ProductQuery) => {
    const builder = new QueryBuilder(this.endpoint);

    if (query.brandId)
      builder.addNumber("brandId", query.brandId);

    if (query.categoryId)
      builder.addNumber("categoryId", query.categoryId);

    if (query.minPrice)
      builder.addNumber("minPrice", query.minPrice);

    if (query.maxPrice)
      builder.addNumber("maxPrice", query.maxPrice);

    if (query.searchText)
      builder.addString("title", query.searchText);

    return this.client.get<Entities<Product>>(builder.encodedUrl).then(res => res.data);
  }
  
}

export default new ProductAPI("/products");
