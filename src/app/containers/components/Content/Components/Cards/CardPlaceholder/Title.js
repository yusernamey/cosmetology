import * as React from "react";
import { motion } from "framer-motion";
import { closeSpring, openSpring } from "./animations";

export const Title = ({ duration, price, title, isSelected }) => {
  const x = isSelected ? 30 : 15;
  const y = x;

  return (
    <motion.div
      className="title-container"
      initial={false}
      animate={{ x, y }}
      transition={isSelected ? openSpring : closeSpring}
    >
      <h1 className="category">{title}</h1>
      <h2>{duration}</h2>
      <h2>{price}</h2>
    </motion.div>
  );
};
