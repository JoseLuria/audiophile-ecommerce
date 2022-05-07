import "./Layout.style.scss";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { ComponentProps } from "../typescript/interfaces";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }: ComponentProps) => {
  return (
    <div className="layout-container">
      <NavBar />
      {children}
      <Footer />
      <ToastContainer pauseOnHover={false} autoClose={1000} />
    </div>
  );
};

export default Layout;
