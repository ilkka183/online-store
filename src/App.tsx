import { Route, Routes } from "react-router-dom";
import CartView from "./pages/cart/CartView";
import HomeView from "./pages/home/HomeView";
import SignInView from "./pages/user/SignInView";
import SignUpView from "./pages/user/SignUpView";
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
      <div>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/home" element={<HomeView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/signin" element={<SignInView />} />
          <Route path="/signup" element={<SignUpView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
