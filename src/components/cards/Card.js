import React from "react";
import { Link } from "react-router-dom";
import Visa from "../../img/visa.png";
import MasterCard from "../../img/master-card.png";
import Discover from "../../img/discover.png";
import Chip from "../../img/chip.png";
import Plus from "../../img/plus.svg";

const Card = ({ card, url, disable }) => {
  const cardLogo = () => {
    if (card.cardNumber[0][0] !== "5" && card.cardNumber[0][0] !== "6") {
      return Visa;
    }
    if (card.cardNumber[0][0] === "5") {
      return MasterCard;
    }
    if (card.cardNumber[0][0] === "6") {
      return Discover;
    }
  };

  return (
    <>
      {card ? (
        <Link
          className="card flex flex-column"
          to={`/cards/${url}`}
          onClick={disable}
        >
          <img src={cardLogo()} className="card-logo" alt={cardLogo()} />
          <img src={Chip} className="chip" alt={Chip} />
          <div className="card-numbers">
            {card.cardNumber.map((c, i) => (
              <span className="card-number" key={i}>
                {c}
              </span>
            ))}
          </div>
          <div className="flex flex-space  w-full">
            <h1 className="card-name">{card ? card.name : "User name"}</h1>
            <h1 className="card-expiresDate">
              {card ? card.expiresDate : "02/22"}
            </h1>
          </div>
        </Link>
      ) : (
        <Link
          className="card card-border flex flex-center"
          to={`/cards/${url}`}
        >
          <img src={Plus} alt={Plus} className="plus" />
        </Link>
      )}
    </>
  );
};

export default Card;
