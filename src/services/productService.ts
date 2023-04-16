import EntityService, { Entity } from "./entityService";

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
  protected name(): string { return "products"; }

  public useProducts(productQuery: ProductQuery) {
    let endpoint = "/products";
  
    if (productQuery?.categoryId)
      endpoint += "/category/" + productQuery?.categoryId;
  
    return this.useAll([productQuery]);
  }
}

export default new ProductService();
