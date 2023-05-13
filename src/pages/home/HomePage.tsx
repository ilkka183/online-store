import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CategoryList from "./CategoryList";
import ProductGrid from "./ProductGrid";
import { Product, ProductQuery } from "../../api/productApi";
import { Cart } from "../../api/cartApi";
import useProducts from "../../hooks/product/useProducts";

interface Props {
  cart: Cart;
  productQuery: ProductQuery;
  onSelectCategory: (categoryId?: number) => void;
}

export default function HomePage({
  cart,
  productQuery,
  onSelectCategory,
}: Props) {
  const { brandId, categoryId } = useParams();
  const showSide = !brandId && !categoryId;

  let usedProductQuery: ProductQuery = {};

  if (brandId) {
    usedProductQuery = { brandId: parseInt(brandId) };
  } else if (categoryId) {
    usedProductQuery = { categoryId: parseInt(categoryId) };
  } else {
    usedProductQuery = productQuery;
  }

  const { data, error, isLoading } = useProducts(usedProductQuery);

  if (error) return null;

  let products: Product[] = [];

  if (isLoading) {
    for (let id: number = 1; id <= 4; id++)
      products.push({ ...({} as Product), id: id.toString() });
  } else products = [...data.data];

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: showSide ? `"nav nav" "side main"` : `"nav nav" "main main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav"></GridItem>
      {showSide && (
        <Show above="lg">
          <GridItem area="side" paddingX={5}>
            <CategoryList
              selectedCategoryId={productQuery.categoryId}
              onSelectCategory={(categoryId) => onSelectCategory(categoryId)}
            />
          </GridItem>
        </Show>
      )}
      <GridItem area="main">
        <ProductGrid cart={cart} products={products} isLoading={isLoading} />
      </GridItem>
    </Grid>
  );
}
