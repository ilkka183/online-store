import { Box, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import useProducts, { ProductQuery } from "../hooks/useProducts";

interface Props {
  productQuery: ProductQuery;
}

function ProductGrid({ productQuery }: Props) {
  const { data: products } = useProducts(productQuery);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {products.map((product) => (
          <Grid item xs={2} sm={4} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductGrid;
