import "./navigation.css";
import { NavLink } from "react-router-dom";
import NavAnimation from "../../Content/Components/Animations/Navigation/NavAnimation";
import { navVariants } from "../../Content/Components/Animations/AnimationInput/NavVariants";

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
  const handleClick = () => {
    console.log("nu veikia");
  };
  return (
    <nav>
      <ul>
        {routeList.map((navItem, i) => {
          return (
            <NavLink
              key={i}
              activeStyle={navVariants.activeStyle}
              onClick={() => handleClick()}
              exact
              to={navItem === "home" ? "/" : navItem}
            >
              <NavAnimation> {navList[i]} </NavAnimation>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};
