import { BrowserRouter, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "./Header";
import { Content } from "./Content";
export const Components = () => {
  const location = useLocation();
  return (
    <>
      <BrowserRouter>
        <AnimatePresence location={location} key={location.key} exitBeforeEnter>
          <Header />
          <Content key={location.key} />
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
};
