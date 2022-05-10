import { Home, Category, Product, Checkout } from "../pages";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Element: JSXComponent;
}

export const routes: Route[] = [
  {
    path: "/",
    Element: Home,
  },
  {
    path: "/category/:id",
    Element: Category,
  },
  {
    path: "/product/:id",
    Element: Product,
  },
  {
    path: "/checkout",
    Element: Checkout,
  },
];
