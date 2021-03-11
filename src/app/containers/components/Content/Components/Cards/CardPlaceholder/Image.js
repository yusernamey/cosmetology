import { motion } from "framer-motion";
import { closeSpring } from "./animations";

export const Image = ({ id, isSelected }) => {
  return (
    <motion.div
      className="card-image-container"
      style={{ originX: 0, originY: 0 }}
    >
      <motion.img
        className="card-image"
        src={`${process.env.PUBLIC_URL}/assets/cardImages/${id}.jpg`}
        alt=""
        initial={false}
        animate={isSelected ? { x: -20, y: -20 } : { x: 0, y: 0 }}
        transition={closeSpring}
      />
    </motion.div>
  );
};
