import { Route, Routes } from "react-router-dom";
import CartView from "./pages/cart/CartView";
import SignUpView from "./pages/client/SignUpView";
import HomeView from "./pages/home/HomeView";
import SignInView from "./pages/client/SignInView";
import NavBar from "./components/NavBar";
import createMockServer from "./mock/mockServer";
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
