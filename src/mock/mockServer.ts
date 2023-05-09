import { createServer } from "miragejs";

import CartController from "./controllers/cartController";
import ClientController from "./controllers/clientController";
import ClientAddressController from "./controllers/clientAddressController";
import CategoryController from "./controllers/categoryController";
import ProductController from "./controllers/productController";

const cart = new CartController();
const client = new ClientController();
const clientAddress = new ClientAddressController();
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
      this.post("/clients/signin", (schema, request) => client.signIn(JSON.parse(request.requestBody)));
      this.post("/clients/signup", (schema, request) => client.signUp(JSON.parse(request.requestBody)));

      // Clients
      this.get("/client-addresses/:clientId", (schema, request) => clientAddress.getOf(parseInt(request.params.clientId)));

      // Categories
      this.get("/categories", (schema, request) => category.getAll());
      this.get("/categories/:id", (schema, request) => category.get(request.params.id));

      // Products
      this.get("/products", (schema, request) => product.getProducts(request.queryParams));
      this.get("/products/:id", (schema, request) => product.get(request.params.id));
    },
  });

 return server;
};
