import { createServer } from "miragejs";

import CartController from "./controllers/cartController";
import CategoryController from "./controllers/categoryController";
import ProductController from "./controllers/productController";
import UserController from "./controllers/userController";

const cart = new CartController();
const category = new CategoryController();
const product = new ProductController();
const user = new UserController();

export default function createMockServer() {
  const server = createServer({
    routes() {
      this.namespace = "api";

      // Carts
      this.get("/carts", (schema, request) => cart.getAll());
      this.get("/carts/:id", (schema, request) => cart.getCart(request.params.id));
      this.put("/carts/:id", (schema, request) => cart.setCart(request.params.id, JSON.parse(request.requestBody)));

      // Categories
      this.get("/categories", () => category.getAll());

      // Products
      this.get("/products", () => product.getAll());
      this.get("/products/category/:id", (schema, request) => product.getAll().filter(item => item.categoryId.toString() === request.params.id));

      // Users
      this.get("/users", () => user.getAll());
      this.get("/users/:id", (schema, request) => user.get(request.params.id));
      this.put("/users/:id", (schema, request) => user.put(request.params.id, JSON.parse(request.requestBody)));
    },
  });

 return server;
};
