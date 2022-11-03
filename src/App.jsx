import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/information/:id" element={<Information />} />
            <Route path="/category/:type" element={<Category />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
