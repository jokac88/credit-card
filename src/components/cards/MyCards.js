import React from "react";
import { Link } from "react-router-dom";
import CardVersion from "../../img/visa.png";
import Chip from "../../img/chip.png";

const MyCards = () => {
  const cards = [
    {
      id: 1,
      name: "Petar Petrovic",
      cardNumber: [1000, 1000, 1000, 1000],
      expires: "22/07",
    },
    {
      id: 2,
      name: "Ivan Ivanovic",
      cardNumber: [1000, 1000, 1000, 1000],
      expires: "23/07",
    },
  ];
  return (
    <div className="my-cards">
      {cards.map((card) => (
        <Link className="card m-3" to={`/cards/${card.id}/edit`} key={card.id}>
          <img src={CardVersion} className="card-version" alt={CardVersion} />
          <img src={Chip} className="chip" alt={Chip} />
          <div className="card-numbers">
            {card.cardNumber.map((c, i) => (
              <span className="card-number" key={i}>
                {c}
              </span>
            ))}
          </div>
          <div className="name-expires">
            <h1 className="card-name">{card.name}</h1>
            <h1 className="card-expires">{card.expires}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MyCards;
