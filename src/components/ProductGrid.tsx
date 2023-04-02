import { Grid, GridItem } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import useProducts, { ProductQuery } from "../hooks/useProducts";

interface Props {
  productQuery: ProductQuery;
}

function ProductGrid({ productQuery }: Props) {
  const { data: products } = useProducts(productQuery);

  return (
    <Grid>
      {products.map((product) => (
        <GridItem key={product.id}>
          <ProductCard product={product} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default ProductGrid;
