import { motion } from "framer-motion";
import React from "react";
import { navVariants } from "./AnimationInput";
export default class AnimateSlides extends React.Component {
  render() {
    return (
      <motion.li
        whileHover={navVariants.hoverStyle}
        transition={navVariants.transition}
      >
        {this.props.output}
      </motion.li>
    );
  }
}
