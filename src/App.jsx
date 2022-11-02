import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/category/:type" element={<Category />} />
          <Route path="/information/:type" element={<Information />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
