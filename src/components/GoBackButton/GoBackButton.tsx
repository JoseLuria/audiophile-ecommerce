import "./GoBackButton.style.scss";
import { useNavigate } from "react-router-dom";
import { ComponentProps } from "../../typescript/interfaces";

type GoBackButtonProps = Omit<ComponentProps, "children">;

const GoBackButton = ({ className, style }: GoBackButtonProps) => {
  const navigate = useNavigate();

  return (
    <button className={`go-back-button ${className}`} style={style} onClick={() => navigate(-1)}>
      Go Back
    </button>
  );
};

export default GoBackButton;
