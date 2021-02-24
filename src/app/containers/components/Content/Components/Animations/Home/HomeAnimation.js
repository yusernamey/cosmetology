import { motion } from "framer-motion";
import React from "react";
import { HomeVariants } from "../AnimationInput";
export default class AnimateSlides extends React.Component {
  render() {
    return (
      <motion.div
        variants={HomeVariants}
        initial={HomeVariants.hidden}
        animate={HomeVariants.visible}
        transition={HomeVariants.transition}
        exit={HomeVariants.exit}
        className={this.props.className}
      >
        {this.props.output}
      </motion.div>
    );
  }
}
