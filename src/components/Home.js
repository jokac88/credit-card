import React from "react";
import { Link } from "react-router-dom";
import Card from "./cards/Card";

const Home = () => {
  return (
    <div className="home">
      <h1 className="heading">My Cards</h1>
      <div className="cards">
        <Link to="/cards">
          <Card heading="Edit Card" />
        </Link>
        <Link to="/cards/add">
          <Card heading="Add Card" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
