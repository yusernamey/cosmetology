// slide animations
export const slideVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  transition: {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  },
  exit: {
    y: "100vh",
    opacity: 0,
    scale: 3,
  },
};
