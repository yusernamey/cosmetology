import * as React from "react";
import { motion } from "framer-motion";

export const ContentPlaceholder = ({ content }) => {
  return (
    <motion.div
      className="content-container"
      style={{ originY: 0, originX: 0 }}
    >
      <p>{content}</p>
    </motion.div>
  );
};
