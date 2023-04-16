import { createServer } from "miragejs";
import carts from "./cartTable";
import categories from "./categoryTable";
import products from "./productTable";
import users from "./userTable";

export default function createMockServer() {
 const server = createServer({
  routes() {
    this.get("/api/carts", () => carts.getAll());
    this.delete("/api/carts/:id", (schema, request) => carts.delete(request.params.id));

    this.get("/api/categories", () => categories.getAll());

    this.get("/api/products", () => products.getAll());
    this.get("/api/products/category/:id", (schema, request) => products.getByCategory(parseInt(request.params.id)));

    this.get("/api/users", () => users.getAll());
    this.get("/api/users/:id", (schema, request) => users.get(request.params.id));
  },
});

 return server;
};
