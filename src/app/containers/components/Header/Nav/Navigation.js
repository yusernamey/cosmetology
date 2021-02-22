import "./navigation.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const activeStyle = {
  borderBottom: "solid 1px #f8e112",
};
const hoverStyle = { scale: 1.1, color: "#f8e112" };
const transition = { type: "spring", stiffness: 100 };

const routeList = [
  "home",
  "about",
  "services",
  "gallery",
  "register",
  "contact",
];
const navList = [
  "Pradžia",
  "Apie mane",
  "Paslaugos",
  "Galerija",
  "Registruotis",
  "Kontaktai",
];
export const Navigation = () => {
  return (
    <nav>
      <ul>
        {routeList.map((navItem, i) => {
          return (
            <NavLink
              key={i}
              activeStyle={activeStyle}
              exact
              to={navItem === "home" ? "/" : navItem}
            >
              <motion.li whileHover={hoverStyle} transition={transition}>
                {navList[i]}
              </motion.li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};
