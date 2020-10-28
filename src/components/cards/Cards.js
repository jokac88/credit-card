import React from "react";
import { Switch, Route } from "react-router-dom";
import MyCards from "./MyCards";
import AddCard from "./AddCard";
import EditCard from "./EditCard";

const Cards = () => {
  return (
    <Switch>
      <Route exact path="/cards">
        <MyCards />
      </Route>
      <Route path="/cards/add">
        <AddCard />
      </Route>
      <Route path="/cards/:id/edit">
        <EditCard />
      </Route>
    </Switch>
  );
};

export default Cards;
