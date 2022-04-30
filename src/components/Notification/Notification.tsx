import "./Notification.style.scss";
import { useSelector } from "react-redux";
import AddedIcon from "../../assets/shared/desktop/added.icon.svg";
import RemovedIcon from "../../assets/shared/desktop/removed-icon.svg";
import { notificationAnimationVariants } from "./Notification.animations";
import { motion } from "framer-motion";

const Notification = () => {
  const { messageProduct, messageType } = useSelector((state: any) => state.message);

  return (
    <motion.div
      variants={notificationAnimationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="notification"
    >
      <div className={`notification-icon ${messageType === "Add" ? "icon-add" : "icon-removed"}`}>
        <img
          src={messageType === "Add" ? AddedIcon : RemovedIcon}
          alt={messageType === "Add" ? "Added Icon" : "Removed Icon"}
        />
      </div>
      <p className="notification-text">
        {messageType === "Add" ? "Product Added" : "Product Removed"}
        <br />
        <span className="notification-text-span">
          {messageProduct} {messageType === "Add" ? "in" : "from"} cart
        </span>
      </p>
    </motion.div>
  );
};

export default Notification;
