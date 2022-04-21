import "./Button.style.scss";
import { ButtonProps } from "../../interfaces/componentsInterfaces";
import ArrowRightIcon from "../../assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const Button = ({ children, variant, className, style, href, type, action }: ButtonProps) => {
  const componentStyles = `btn-styles ${variant ? `btn-${variant}` : "btn-default"} ${className}`;
  const showIcon = variant === "outline" && <img src={ArrowRightIcon} alt="Arrow Right Icon" />;

  switch (type) {
    case "link":
      return (
        <Link to={href ? href : "/"} onClick={action} style={style} className={componentStyles}>
          {children}
          {showIcon}
        </Link>
      );
    default:
      return (
        <button
          onClick={action}
          type={type ? type : "button"}
          style={style}
          className={componentStyles}
        >
          {children}
          {showIcon}
        </button>
      );
  }
};

export default Button;
