import { createServer } from "miragejs";

import CartTable from "./cartTable";
import CategoryTable from "./categoryTable";
import ProductTable from "./productTable";
import UserTable from "./userTable";

const carts = new CartTable();
const categories = new CategoryTable();
const products = new ProductTable();
const users = new UserTable();

export default function createMockServer() {
  const server = createServer({
    routes() {
      this.namespace = "api";

      // Carts
      this.get("/carts", (schema, request) => carts.getAll());
      this.get("/carts/:id", (schema, request) => carts.getCart(request.params.id));
      this.put("/carts/:id", (schema, request) => carts.setCart(request.params.id, JSON.parse(request.requestBody)));

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
