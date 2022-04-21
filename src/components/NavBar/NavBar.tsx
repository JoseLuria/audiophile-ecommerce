import "./NavBar.style.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo.svg";
import ShoppingCartIcon from "../../assets/shared/desktop/icon-cart.svg";
import MenuIcon from "../../assets/shared/tablet/icon-hamburger.svg";
import NavList from "../NavList/NavList";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-btn-menu">
          <img src={MenuIcon} width={16} height={15} alt="Menu Icon" />
        </button>

        <Link className="navbar-logo" to="/">
          <img width={143} height={25} src={Logo} alt="Logo" />
        </Link>

        <NavList />

        <button className="navbar-btn-cart">
          <img width={23.33} height={20} src={ShoppingCartIcon} alt="Shopping Cart Icon" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
