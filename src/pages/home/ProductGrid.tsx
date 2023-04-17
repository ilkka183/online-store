import { GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import productService, {
  Product,
  ProductQuery,
} from "../../services/productService";

interface Props {
  productQuery: ProductQuery;
}

function ProductGrid({ productQuery }: Props) {
  const { data, error, isLoading } = productService.useProducts(productQuery);

  if (error) return null;

  let products: Product[] = [];

  if (isLoading) {
    for (let id: number = 1; id <= 4; id++)
      products.push({ ...({} as Product), id: id.toString() });
  } else products = [...data];

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {products.map((product) => (
        <GridItem key={product.id}>
          <ProductCard product={product} isSkeleton={isLoading} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
}

export default ProductGrid;
