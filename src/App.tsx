import { Route, Routes } from "react-router-dom";
import CartView from "./pages/cart/CartView";
import LoginView from "./pages/login/LoginView";
import ProductView from "./components/ProductView";
import RegisterView from "./pages/login/RegisterView";
import NavBar from "./components/NavBar";
import createMockServer from "./data/mock";
import "./App.css";

createMockServer();

function App() {
  return (
    <>
      <NavBar
        onSearch={(searchText) => {
          /* setProductQuery({ ...productQuery, searchText }) */
        }}
      />
      <Routes>
        <Route path="/" element={<ProductView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
      </Routes>
    </>
  );
}

export default App;
