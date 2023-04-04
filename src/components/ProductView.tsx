import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import CategoryList from "./CategoryList";
import NavBar from "./NavBar";
import ProductGrid from "./ProductGrid";
import { ProductQuery } from "../hooks/useProducts";

function ProductView() {
  const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setProductQuery({ ...productQuery, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <CategoryList
            selectedCategory={productQuery.category}
            onSelectCategory={(category) =>
              setProductQuery({ ...productQuery, category })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <ProductGrid productQuery={productQuery} />
      </GridItem>
    </Grid>
  );
}

export default ProductView;
