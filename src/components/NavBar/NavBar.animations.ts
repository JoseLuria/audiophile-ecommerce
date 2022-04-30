export const navBarMenuAnimationVariants = {
  initial: { clipPath: "inset(0% 0% 100% 0%)" },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      when: "beforeChildren",
      duration: 0.2,
    },
  },
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: {
      when: "afterchildren",
      duration: 0.2,
    },
  },
};

export const shoppingCartAnimationVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
