import { createServer } from "miragejs";
import cartService from "../services/cartService";
import categoryService from "../services/categoryService";
import productService from "../services/productService";
import userService from "../services/userService";

const carts = cartService.createMockTable();
const categories = categoryService.createMockTable();
const products = productService.createMockTable();
const users = userService.createMockTable();

export default function createMockServer() {
 const server = createServer({
  routes() {
    this.namespace = "api";

    // Carts
    this.get("/carts", () => carts.getAll());
    this.delete("/carts/:id", (schema, request) => carts.delete(request.params.id));

    // Categories
    this.get("/categories", () => categories.getAll());

    // Products
    this.get("/products", () => products.getAll());
    this.get("/products/category/:id", (schema, request) => products.getAll().filter(item => item.categoryId.toString() === request.params.id));

    // Users
    this.get("/users", () => users.getAll());
    this.get("/users/:id", (schema, request) => users.getById(request.params.id));
  },
});

 return server;
};
