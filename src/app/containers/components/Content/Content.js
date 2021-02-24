import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  About,
  Contact,
  Gallery,
  Home,
  Register,
  Services,
} from "./Components";
export const Content = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};
