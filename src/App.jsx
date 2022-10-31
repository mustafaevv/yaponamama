import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Category from "./pages/Category";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:type" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
