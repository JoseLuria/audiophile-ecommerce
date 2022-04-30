import "./NavBar.style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo.svg";
import ShoppingCartIcon from "../../assets/shared/desktop/icon-cart.svg";
import MenuIcon from "../../assets/shared/tablet/icon-hamburger.svg";
import NavList from "../NavList/NavList";
import Button from "../Button/Button";
import CategoriesSection from "../CategoriesSection/CategoriesSection";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import BlackContainer from "../../containers/Shared/BlackContainer/BlackContainer";
import { handleRemoveElement, handleShowElement } from "../../utils/handleElement";
import { shoppingCartAnimationVariants, navBarMenuAnimationVariants } from "./NavBar.animations";
import CartList from "../CartList/CartList";
import { handleStopPropagation } from "../../utils/handleStopPropagation";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  const [showCart, setShowCart] = useState<Boolean>(false);

  const handleShowMenu = () => handleShowElement(setShowMenu, setShowCart, showCart, showMenu);

  const handleShowCart = () => handleShowElement(setShowCart, setShowMenu, showMenu, showCart);

  const handleHomeRemoveAllElements = () => {
    if (showMenu) {
      handleRemoveElement(setShowMenu);
    } else if (showCart) {
      handleRemoveElement(setShowCart);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <button onClick={handleShowMenu} className="navbar-btn-menu">
            <img src={MenuIcon} width={16} height={15} alt="Menu Icon" />
          </button>

          <Link onClick={handleHomeRemoveAllElements} className="navbar-logo" to="/">
            <img width={143} height={25} src={Logo} alt="Logo" />
          </Link>

          <NavList action={() => handleRemoveElement(setShowCart)} />

          <button onClick={handleShowCart} className="navbar-btn-cart">
            <img width={23.33} height={20} src={ShoppingCartIcon} alt="Shopping Cart Icon" />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {showMenu && (
          <BlackContainer action={() => handleRemoveElement(setShowMenu)}>
            <motion.div
              onClick={(e) => handleStopPropagation(e)}
              variants={navBarMenuAnimationVariants}
              className="navbar-mobile-menu"
            >
              <CategoriesSection action={() => handleRemoveElement(setShowMenu)} />
            </motion.div>
          </BlackContainer>
        )}
        {showCart && (
          <BlackContainer
            action={() => handleRemoveElement(setShowCart)}
            className="tranparent-background-container"
          >
            <motion.div variants={shoppingCartAnimationVariants} className="shopping-cart-wrapper">
              <div onClick={(e) => handleStopPropagation(e)} className="shopping-cart-container">
                <CartList />
                <Button
                  className="checkout-button"
                  type="link"
                  action={() => handleRemoveElement(setShowCart)}
                  href="/checkout"
                >
                  Checkout
                </Button>
              </div>
            </motion.div>
          </BlackContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
