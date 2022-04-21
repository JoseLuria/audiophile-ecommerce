import { ReactChild, CSSProperties } from "react";

export interface ComponentProps {
  children: ReactChild | ReactChild[];
  className?: string;
  style?: CSSProperties;
}

type buttonVariants = "default" | "black" | "outline";
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
