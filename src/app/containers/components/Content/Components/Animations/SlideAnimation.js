import { motion } from "framer-motion";
import React from "react";
import { slideVariants } from "./AnimationInput";
export default class AnimateSlides extends React.Component {
  render() {
    return (
      <motion.div
        variants={slideVariants}
        initial={slideVariants.hidden}
        animate={slideVariants.visible}
        transition={slideVariants.transition}
        exit={slideVariants.exit}
        className={this.props.className}
      >
        {this.props.output}
      </motion.div>
    );
  }
}
