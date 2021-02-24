import "./navigation.css";
import { NavLink } from "react-router-dom";
import NavAnimation from "../../Content/Components/Animations/Navigation/NavAnimation";

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
              activeStyle={NavAnimation.activeStyle}
              exact
              to={navItem === "home" ? "/" : navItem}
            >
              <NavAnimation output={navList[i]} />
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};
