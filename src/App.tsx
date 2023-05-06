import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CartView from "./pages/cart/CartPage";
import SignUpPage from "./pages/client/SignUpPage";
import HomePage from "./pages/home/HomePage";
import SignInPage from "./pages/client/SignInPage";
import NavBar from "./components/NavBar";
import { ProductQuery } from "./api/productApi";
import createMockServer from "./mock/mockServer";
import useCart from "./hooks/cart/useCart";
import "./App.css";

createMockServer();

function App() {
  const clientId = 1;

  const { cart } = useCart(clientId);

  const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );

  const handleSelectCategory = (categoryId?: number) =>
    setProductQuery({ ...productQuery, categoryId, searchText: "" });

  const handleSearch = (searchText: string) =>
    setProductQuery({ ...productQuery, searchText });

  const renderHomePage = () => {
    return (
      <HomePage
        cart={cart}
        productQuery={productQuery}
        onSelectCategory={handleSelectCategory}
      />
    );
  };

  return (
    <>
      <NavBar cart={cart} onSearch={handleSearch} />
      <div>
        <Routes>
          <Route path="/" element={renderHomePage()} />
          <Route path="/home" element={renderHomePage()} />
          <Route path="/cart" element={<CartView cart={cart} />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
