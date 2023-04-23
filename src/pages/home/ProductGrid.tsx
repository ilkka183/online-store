import { GridItem, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { Product, ProductQuery } from "../../services/productService";
import useProducts from "../../hooks/useProducts";

interface Props {
  productQuery: ProductQuery;
}

export default function ProductGrid({ productQuery }: Props) {
  const { data, error, isLoading } = useProducts(productQuery);

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
