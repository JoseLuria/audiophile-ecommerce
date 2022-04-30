import "./Text.style.scss";
import { TextProps } from "../../typescript/interfaces";

const Text = ({ children, style, className, color, align, type }: TextProps) => {
  return (
    <p
      style={style}
      className={`${type === "new" ? "text-new" : "text-default"} ${
        color ? `text-${color}` : "text-black"
      } ${align && `text-${align}`} ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
