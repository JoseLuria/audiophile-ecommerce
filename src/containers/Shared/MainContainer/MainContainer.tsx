import "./MainContainer.style.scss";
import { MainContainerProps } from "../../../typescript/interfaces";

const MainContainer = ({ children, className, style, variant }: MainContainerProps) => {
  return (
    <main
      style={style}
      className={`main-container-wrapper ${
        variant ? `layout-${variant}` : "layout-category"
      } ${className}`}
    >
      <div className="main-container">{children}</div>
    </main>
  );
};

export default MainContainer;
