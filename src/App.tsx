import CartView from "./views/cart/CartView";
import LoginView from "./views/login/LoginView";
import ProductView from "./components/ProductView";
import RegisterView from "./views/login/RegisterView";
import createMockServer from "./data/mock";
import "./App.css";

createMockServer();

function App() {
  //  return <CartView />;
  //  return <LoginView />;
  //  return <ProductView />;
  return <RegisterView />;
}

export default App;
