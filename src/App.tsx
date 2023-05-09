import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AccountInformationPage from "./pages/account/AccountInformationPage";
import OrdersPage from "./pages/account/OrdersPage";
import MessagesPage from "./pages/account/MessagesPage";
import AddressBookPage from "./pages/account/AddressBookPage";
import AddressPage from "./pages/account/AddressPage";
import PaymentMethodsPage from "./pages/account/PaymentMethodsPage";
import CartPage from "./pages/cart/CartPage";
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
      <NavBar cart={cart} productQuery={productQuery} onSearch={handleSearch} />
      <div>
        <Routes>
          <Route path="/" element={renderHomePage()} />
          <Route path="/home" element={renderHomePage()} />
          <Route path="/account/orders" element={<OrdersPage />} />
          <Route
            path="/account/information"
            element={<AccountInformationPage />}
          />
          <Route path="/account/address-book" element={<AddressBookPage />} />
          <Route path="/account/address-book/add" element={<AddressPage />} />
          <Route
            path="/account/address-book/edit/:id"
            element={<AddressPage />}
          />
          <Route
            path="/account/paymentmethods"
            element={<PaymentMethodsPage />}
          />
          <Route path="/cart" element={<CartPage cart={cart} />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
