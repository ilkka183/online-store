import { createServer } from "miragejs";

import CartController from "./controllers/cartController";
import ClientController from "./controllers/clientController";
import CategoryController from "./controllers/categoryController";
import ProductController from "./controllers/productController";

const cart = new CartController();
const client = new ClientController();
const category = new CategoryController();
const product = new ProductController();

export default function createMockServer() {
  const server = createServer({
    routes() {
      this.namespace = "api";

      // Carts
      this.get("/carts", (schema, request) => cart.getAll());
      this.get("/carts/:id", (schema, request) => cart.getCart(request.params.id));
      this.put("/carts/:id", (schema, request) => cart.setCart(request.params.id, JSON.parse(request.requestBody)));

      // Clients
      this.get("/clients", (schema, reques) => client.getAll());
      this.get("/clients/:id", (schema, request) => client.get(request.params.id));
      this.put("/clients/:id", (schema, request) => client.replace(request.params.id, JSON.parse(request.requestBody)));
      this.post("/auth/signin", (schema, request) => client.signIn(JSON.parse(request.requestBody)));
      this.post("/auth/signup", (schema, request) => client.signUp(JSON.parse(request.requestBody)));

      // Categories
      this.get("/categories", (schema, request) => category.getAll());
      this.get("/categories/:id", (schema, request) => category.get(request.params.id));

      // Products
      this.get("/products", (schema, request) => product.getAll());
      this.get("/products/:id", (schema, request) => product.get(request.params.id));
      this.get("/products/category/:id", (schema, request) => product.getAll().filter(item => item.categoryId.toString() === request.params.id));
    },
  });

 return server;
};
