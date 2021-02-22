import { Switch, Route } from "react-router-dom";
import {
  About,
  Contact,
  Gallery,
  Home,
  Register,
  Services,
} from "./Components";
export const Content = () => {
  return (
    <>
      <Switch>
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
    </>
  );
};
