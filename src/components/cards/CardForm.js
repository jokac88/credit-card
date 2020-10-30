import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";

const CardForm = ({ id }) => {
  const history = useHistory();
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );
  const [name, setName] = useState(id ? cards[id].name : "");
  const [cardNumberOne, setCardNumberOne] = useState(
    id ? cards[id].cardNumber[0] : ""
  );
  const [cardNumberTwo, setCardNumberTwo] = useState(
    id ? cards[id].cardNumber[1] : ""
  );
  const [cardNumberThree, setCardNumberThree] = useState(
    id ? cards[id].cardNumber[2] : ""
  );
  const [cardNumberFour, setCardNumberFour] = useState(
    id ? cards[id].cardNumber[3] : ""
  );
  const [expiresDate, setExpiresDate] = useState(
    id ? cards[id].expiresDate : ""
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const dateValidator = (date) => {
    return /^(0[1-9]|1[0-2])\/([0-9]{2})$/g.test(date);
  };

  const card = {
    name,
    cardNumber: [cardNumberOne, cardNumberTwo, cardNumberThree, cardNumberFour],
    expiresDate,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (
      name.length === 0 ||
      cardNumberOne.length !== 4 ||
      cardNumberTwo.length !== 4 ||
      cardNumberThree.length !== 4 ||
      cardNumberFour.length !== 4 ||
      !dateValidator(expiresDate)
    ) {
      return;
    }

    if (id) {
      cards[id] = card;
      setCards([...cards]);
    } else {
      setCards([...cards, card]);
    }

    setTimeout(() => {
      history.push("/cards");
    });
  };

  return (
    <div className="card-form flex flex-column">
      <h1 className="heading">
        {id ? "Edit current card" : "Add card to account"}
      </h1>
      <Card card={card} />
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="John Doe"
            className={`error-input ${
              name.length === 0 && isSubmitted ? "active" : ""
            }`}
            onChange={(e) => setName(e.target.value)}
          />
          <span
            className={`error-message ${
              name.length === 0 && isSubmitted ? "active" : ""
            }`}
          >
            Name can't be blank
          </span>
        </div>
        <label htmlFor="card-number">Card Number</label>
        <div className="form-field">
          <div className="flex">
            <input
              className={`w-1/2 mr-2 error-input ${
                cardNumberOne.length !== 4 && isSubmitted ? "active" : ""
              }`}
              type="number"
              name="card-number"
              value={cardNumberOne}
              placeholder="1456"
              onChange={(e) => setCardNumberOne(e.target.value)}
            />
            <input
              className={`w-1/2 mx-2 error-input ${
                cardNumberTwo.length !== 4 && isSubmitted ? "active" : ""
              }`}
              type="number"
              name="card-number"
              value={cardNumberTwo}
              placeholder="1298"
              onChange={(e) => setCardNumberTwo(e.target.value)}
            />
            <input
              className={`w-1/2 mx-2 error-input ${
                cardNumberThree.length !== 4 && isSubmitted ? "active" : ""
              }`}
              type="number"
              name="card-number"
              value={cardNumberThree}
              placeholder="6574"
              onChange={(e) => setCardNumberThree(e.target.value)}
            />
            <input
              className={`w-1/2 ml-2 error-input ${
                cardNumberFour.length !== 4 && isSubmitted ? "active" : ""
              }`}
              type="number"
              name="card-number"
              value={cardNumberFour}
              placeholder="1287"
              onChange={(e) => setCardNumberFour(e.target.value)}
            />
          </div>
          <span
            className={`error-message ${
              (cardNumberOne.length !== 4 ||
                cardNumberTwo.length !== 4 ||
                cardNumberThree.length !== 4 ||
                cardNumberFour.length !== 4) &&
              isSubmitted
                ? "active"
                : ""
            }`}
          >
            Wrong card number
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="expiresDate">Expires on</label>
          <input
            className={`error-input ${
              !dateValidator(expiresDate) && isSubmitted ? "active" : ""
            }`}
            type="text"
            name="expiresDate"
            value={expiresDate}
            placeholder="07/23"
            onChange={(e) => setExpiresDate(e.target.value)}
          />
          <span
            className={`error-message ${
              !dateValidator(expiresDate) && isSubmitted ? "active" : ""
            }`}
          >
            Wrong date
          </span>
        </div>
        <input className="btn-save" type="submit" value="Save" />
      </form>
    </div>
  );
};

export default CardForm;
