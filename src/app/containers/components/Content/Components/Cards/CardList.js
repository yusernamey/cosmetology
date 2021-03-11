import * as React from "react";
import { Card } from "./CardPlaceholder/Card";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./card.css";
import { CardInput } from "./CardInput";

const List = ({ match }) => (
  <ul className="card-list">
    {CardInput.map((card) => (
      <Card key={card.id} isSelected={match.params.id === card.id} {...card} />
    ))}
  </ul>
);

export const CardList = () => (
  <Router>
    <Route path={["/:id", "/"]} component={List} />
  </Router>
);
