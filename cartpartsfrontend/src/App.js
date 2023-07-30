import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { HOME, PRODUCTS, ADDPRODUCT, NOTFOUND, EDITPRODUCT } from "./routes/PublicPaths";
import Footer from "./components/Footer";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={PRODUCTS} element={<Products />} />
        <Route path={EDITPRODUCT} element={<EditProduct />} />
        <Route path={ADDPRODUCT} element={<AddProduct />} />
        <Route path={NOTFOUND} element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
