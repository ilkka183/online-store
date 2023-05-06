import { GridItem, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { Product, ProductQuery } from "../../api/productApi";
import { Cart } from "../../api/cartApi";

interface Props {
  cart: Cart;
  products: Product[];
  isLoading: boolean;
}

export default function ProductGrid({ cart, products, isLoading }: Props) {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {products.map((product) => (
        <GridItem key={product.id}>
          <ProductCard cart={cart} product={product} isSkeleton={isLoading} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
}
