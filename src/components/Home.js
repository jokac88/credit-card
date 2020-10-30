import React from "react";
import Card from "./cards/Card";

const Home = () => {
  const card = {
    name: "Username",
    cardNumber: ["1456", "1298", "6574", "1287"],
    expiresDate: "02/22",
  };

  return (
    <div className="home">
      <h1 className="heading">Welcome</h1>
      <div className="flex flex-space">
        <Card className="flex flex-column" card={card} url="" />
        <Card url="add" />
      </div>
    </div>
  );
};

export default Home;
