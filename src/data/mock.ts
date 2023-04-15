import { createServer } from "miragejs";
import cart from "./cartData";
import { categoryData } from "./categoryData";
import { productData } from "./productData";
import { userData } from "./userData";

export default function createMockServer() {
 const server = createServer({
  routes() {
    this.get("/api/carts", () => cart.get());
    
    this.delete("/api/carts/:id", (schema, request) => {
      const id = request.params.id;

      return cart.delete(id);
    });

    this.get("/api/categories", () => categoryData);
    this.get("/api/products", () => productData);
    this.get("/api/products/category/:id", (schema, request) => productData.filter(product => product.categoryId.toString() === request.params.id));
    this.get("/api/users", () => userData);

    this.get("/api/users/:id", (schema, request) => {
      const index = userData.findIndex(user => user.id.toString() === request.params.id);

      if (index >= 0)
        return userData[index];

      return null;
    });
  },
});

 return server;
};
