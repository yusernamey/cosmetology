import React from "react";
import "./header.css";
import { Navigation } from "./Nav";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
};
