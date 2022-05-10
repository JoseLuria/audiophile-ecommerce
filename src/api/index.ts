import Products from "../data/products.json";
import { productCategory } from "../typescript/types";
import { StoreProduct, CheckoutResponse, CheckoutOrder } from "../typescript/interfaces";

export default {
  productByCategory: (productCategory: productCategory): Promise<StoreProduct[]> =>
    new Promise((resolve) =>
      setTimeout(() => {
        const products = Products.filter(({ category }) => category === productCategory);

        resolve(products as StoreProduct[]);
      }, 1000),
    ),

  productBySlug: (productSlug: string): Promise<StoreProduct> =>
    new Promise((resolve) =>
      setTimeout(() => {
        const [products] = Products.filter(({ slug }) => slug === productSlug);

        resolve(products as StoreProduct);
      }, 1000),
    ),

  checkoutCart: (orderData: CheckoutOrder): Promise<CheckoutResponse> =>
    new Promise((resolve) =>
      setTimeout(() => {
        const othersLength =
          orderData.cartList.length > 1 ? orderData.cartList.length - 1 : undefined;

        const finalResult = {
          firstElement: orderData.cartList[0],
          othersLength,
          grandTotalPrice: orderData.grandTotalPrice,
        };

        resolve(finalResult);
      }, 1000),
    ),
};
