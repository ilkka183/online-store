import { useState } from "react";
import CategoryList from "./components/CategoryList";
import ProductGrid from "./components/ProductGrid";
import { ProductQuery } from "./hooks/useProducts";
import "./App.css";

function App() {
  const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );

  return (
    <>
      <CategoryList
        selectedCategory={productQuery.category}
        onSelectCategory={(category) =>
          setProductQuery({ ...productQuery, category })
        }
      />
      <ProductGrid productQuery={productQuery} />
    </>
  );
}

export default App;
