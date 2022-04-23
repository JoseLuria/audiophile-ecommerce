import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Element: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const HomeLazy = lazy(() => import("../pages/Home/Home"));
const CategoryLazy = lazy(() => import("../pages/Category/Category"));
const ProductLazy = lazy(() => import("../pages/Product/Product"));
const CheckoutLazy = lazy(() => import("../pages/Checkout/Checkout"));

export const routes: Route[] = [
  {
    path: "/",
    Element: HomeLazy,
  },
  {
    path: "/category/:id",
    Element: CategoryLazy,
  },
  {
    path: "/product/:id",
    Element: ProductLazy,
  },
  {
    path: "/checkout",
    Element: CheckoutLazy,
  },
];
