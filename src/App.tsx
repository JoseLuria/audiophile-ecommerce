import { Suspense } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { routes } from "./routes/routes";
import LoadingComponent from "./components/LoadingComponent/LoadingComponent";

function App() {
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
