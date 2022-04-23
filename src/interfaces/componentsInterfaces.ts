import { ReactChild, CSSProperties } from "react";

export interface ComponentProps {
  children: ReactChild | ReactChild[];
  className?: string;
  style?: CSSProperties;
}

type buttonVariants = "default" | "black" | "outline" | "gray";
type buttonTypes = "link" | "submit" | "button" | "reset";

export interface ButtonProps extends ComponentProps {
  variant?: buttonVariants;
  type?: buttonTypes;
  href?: string;
  action?: () => any;
}

type textColors = "black" | "white" | "beige";
type textAlign = "left" | "center" | "right";
type textType = "new" | "default";

export interface TextProps extends ComponentProps {
  color?: textColors;
  align?: textAlign;
  type?: textType;
}

type productCategory = "earphones" | "headphones" | "speakers";

export interface ResponsiveImages {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IncludeElement {
  quantity: number;
  item: string;
}

interface OtherProduct {
  slug: string;
  name: string;
  image: ResponsiveImages;
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
  gallery: {
    first: ResponsiveImages;
    second: ResponsiveImages;
    third: ResponsiveImages;
  };
  others: OtherProduct[];
}

export interface IndividualProductProps {
  product: StoreProduct;
}
