import { createServer } from "miragejs";
import { cartData } from "./cartData";
import { categoryData } from "./categoryData";
import { productData } from "./productData";
import { userData } from "./userData";

function createMockServer() {
 const server = createServer({
  routes() {
    this.get("/api/carts", () => cartData);
    this.get("/api/categories", () => categoryData);
    this.get("/api/products", () => productData);
    this.get("/api/products/category/:id", (schema, request) => productData.filter(product => product.categoryId.toString() === request.params.id));
    this.get("/api/users", () => userData);

    this.get("/api/users/:id", (chema, request) => {
      const index = userData.findIndex(user => user.id.toString() === request.params.id);

      if (index >= 0)
        return userData[index];

      return null;
    });
  },
});

 return server;
};

export default createMockServer;
