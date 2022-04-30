import { useEffect } from "react";
import { Suspense } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { routes } from "./routes/routes";
import LoadingComponent from "./components/LoadingComponent/LoadingComponent";
import { useDispatch } from "react-redux";
import { setCart } from "./redux/cartSlice/cartSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.cart) {
      const cart = JSON.parse(localStorage.cart);
      dispatch(setCart(cart));
    } else {
      localStorage.setItem("cart", JSON.stringify({ cartList: [], totalPrice: 0 }));
    }
  }, []);

  return (
    <Suspense fallback={<LoadingComponent />}>
      <HashRouter>
        <Layout>
          <ScrollToTop />
          <Routes>
            {routes.map(({ path, Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </HashRouter>
    </Suspense>
  );
}

export default App;
