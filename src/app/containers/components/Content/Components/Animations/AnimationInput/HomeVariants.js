export const HomeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  transition: {
    ease: "easeInOut",
    duration: 0.5,
  },
  exit: {
    y: "100vh",
    opacity: 0,
    scale: 3,
  },
};
