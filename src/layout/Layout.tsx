import "./Layout.style.scss";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { ComponentProps } from "../interfaces/componentsInterfaces";

const Layout = ({ children }: ComponentProps) => {
  return (
    <div className="layout-container">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
