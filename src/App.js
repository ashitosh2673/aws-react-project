import logo from "./logo.svg";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;
