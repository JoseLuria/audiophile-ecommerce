import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import { Home, Product, Category, Checkout } from "./pages";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
