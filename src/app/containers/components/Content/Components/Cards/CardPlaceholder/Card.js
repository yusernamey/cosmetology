import { memo, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ContentPlaceholder } from "./ContentPlaceholder";
import { Title } from "./Title";
import { Image } from "./Image";
import { openSpring, closeSpring } from "./animations";

export const Card = memo(
  ({ isSelected, id, title, duration, price, content }) => {
    const cardRef = useRef(null);
    const containerRef = useRef(null);
    const [currentPostionY, setCurrentPositionY] = useState(0);
    useEffect(() => {
      setCurrentPositionY(window.pageYOffset);
      isSelected === true
        ? (document.body.style.overflowY = "hidden")
        : (document.body.style.overflowY = "scroll");
      window.scrollTo(0, currentPostionY);
      console.log("debug");
    }, [isSelected]);
    return (
      <li ref={containerRef} className={`card`}>
        <Overlay isSelected={isSelected} />

        <div className={`card-content-container ${isSelected && "open"}`}>
          <motion.div
            ref={cardRef}
            className="card-content"
            layoutTransition={isSelected ? openSpring : closeSpring}
          >
            <Image id={id} isSelected={isSelected} />

            <Title
              title={title}
              duration={duration}
              price={price}
              isSelected={isSelected}
            />
            <ContentPlaceholder content={content} />
          </motion.div>
        </div>
        {!isSelected && <Link to={id} className={`card-open-link`} />}
      </li>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);

const Overlay = ({ isSelected }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.1 }}
    style={{ pointerEvents: isSelected ? "auto" : "none" }}
    className="overlay"
  >
    <Link to="/" />
  </motion.div>
);
