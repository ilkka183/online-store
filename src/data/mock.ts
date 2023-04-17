import { createServer } from "miragejs";
import cartService from "../services/cartService";
import categoryService from "../services/categoryService";
import productService from "../services/productService";
import userService from "../services/userService";

const categories = categoryService.createMockTable();
const products = productService.createMockTable();
const carts = cartService.createMockTable();
const users = userService.createMockTable();

export default function createMockServer() {
 const server = createServer({
  routes() {
    // Carts
    this.get("/api/carts", () => carts.getAll());
    this.delete("/api/carts/:id", (schema, request) => carts.delete(request.params.id));

    // Categories
    this.get("/api/categories", () => categories.getAll());

    // Products
    this.get("/api/products", () => products.getAll());

    this.get("/api/products/category/:id", (schema, request) => {
      const data = products.getData();

      return data.filter(item => item.categoryId.toString() === request.params.id);
    });

    // Users
    this.get("/api/users", () => users.getAll());
    this.get("/api/users/:id", (schema, request) => users.get(request.params.id));
  },
});

 return server;
};
