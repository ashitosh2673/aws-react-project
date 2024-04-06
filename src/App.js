import logo from "./logo.svg";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CartList from "./components/CartList";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/cart" element={<CartList />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
