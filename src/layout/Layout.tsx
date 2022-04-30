import "./Layout.style.scss";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { ComponentProps } from "../typescript/interfaces";
import { useSelector } from "react-redux";
import Notification from "../components/Notification/Notification";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }: ComponentProps) => {
  const { showMessage } = useSelector((state: any) => state.message);

  return (
    <div className="layout-container">
      <NavBar />
      {children}
      <Footer />
      <AnimatePresence>{showMessage && <Notification />}</AnimatePresence>
    </div>
  );
};

export default Layout;
