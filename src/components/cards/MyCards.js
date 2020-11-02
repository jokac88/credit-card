import React, { useState } from "react";
import Card from "./Card";

const MyCards = () => {
  const [cards] = useState(JSON.parse(localStorage.getItem("cards")) || []);

  return (
    <div className="my-cards flex-column">
      <h1 className="heading">My Cards</h1>
      <div className="flex flex-wrap flex-space">
        {cards.length ? (
          cards.map((card, index) => (
            <Card card={card} url={`${index}/edit`} key={index} />
          ))
        ) : (
          <h1 className="heading">No cards yet...</h1>
        )}
      </div>
    </div>
  );
};

export default MyCards;
