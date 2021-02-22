// slide animations
export const slideVariants = {
  hidden: {
    x: "-100vh",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  transition: {
    type: "spring",
    mass: 0.35,
    stiffness: 75,
    duration: 0.3,
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};
