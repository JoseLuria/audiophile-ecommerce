import "./MainContainer.style.scss";
import { ComponentProps } from "../../interfaces/componentsInterfaces";

const MainContainer = ({ children, className, style }: ComponentProps) => {
  return (
    <main style={style} className={`main-container-wrapper ${className}`}>
      <div className="main-container">{children}</div>
    </main>
  );
};

export default MainContainer;
