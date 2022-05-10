import { ReactChild, CSSProperties } from "react";
import {
  buttonVariants,
  buttonTypes,
  textColors,
  textAlign,
  textType,
  mainContainerVariants,
  productCategory,
} from "./types";

export interface ComponentProps {
  children: ReactChild | ReactChild[];
  className?: string;
  style?: CSSProperties;
}

export interface ButtonProps extends ComponentProps {
  variant?: buttonVariants;
  type?: buttonTypes;
  href?: string;
  action?: () => void;
  disabled?: boolean;
}

export interface TextProps extends ComponentProps {
  color?: textColors;
  align?: textAlign;
  type?: textType;
}

export interface ResponsiveImages {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface MainContainerProps extends ComponentProps {
  variant?: mainContainerVariants;
}

interface IncludeElement {
  quantity: number;
  item: string;
}

export interface OtherProduct {
  slug: string;
  name: string;
  image: ResponsiveImages;
}

export interface Gallery {
  first: ResponsiveImages;
  second: ResponsiveImages;
  third: ResponsiveImages;
}

export interface StoreProduct {
  id: number;
  slug: string;
  name: string;
  image: ResponsiveImages;
  category: productCategory;
  categoryImage: ResponsiveImages;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludeElement[];
  gallery: Gallery;
  others: OtherProduct[];
}

export interface IndividualProductProps {
  product: StoreProduct;
}

export interface MultipleProductsProps {
  products: StoreProduct[];
}

export interface OnlyFunctionProps {
  action?: () => void;
}

export interface CartProduct {
  id: number;
  name: string;
  image: ResponsiveImages;
  price: number;
  quantity: number;
}

export interface FormResult {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  pay: "cash" | "e-money";
  eMoneyNumber?: string;
  eMoneyPin?: number;
}

export interface CheckoutOrder extends FormResult {
  cartList: CartProduct[];
  grandTotalPrice: number;
}

export interface CheckoutResponse {
  firstElement: CartProduct;
  othersLength?: number;
  grandTotalPrice: number;
}
