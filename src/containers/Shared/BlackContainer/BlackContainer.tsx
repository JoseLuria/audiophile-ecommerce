import "./BackContainer.style.scss";
import { motion } from "framer-motion";
import { ComponentProps } from "../../../typescript/interfaces";

interface BlackContainerProps extends ComponentProps {
  action?: () => void;
}

const blackContainerAnimationVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterchildren",
      duration: 0.2,
    },
  },
};

const BlackContainer = ({ children, className, style, action }: BlackContainerProps) => {
  return (
    <motion.div
      onClick={action}
      style={style}
      className={`black-container ${className}`}
      variants={blackContainerAnimationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default BlackContainer;
