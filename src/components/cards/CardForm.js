import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Card from "./Card";

const CardForm = ({ id }) => {
  const history = useHistory();
  const location = useLocation();
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

  const inputValidation = (e) => {
    const element = e.target;
    const elementLength = element.value.length;
    const inputs = [...document.querySelectorAll(`[tabIndex]`)];
    if (elementLength === 4) {
      inputs.map((input, index) => {
        if (index === element.tabIndex + 1) {
          input.focus();
        }
      });
    }
  };

  const cardNumber = (e) => {
    const errorDigit = document.querySelector(".error-digit");
    if (
      isNaN(e.key) ||
      (e.target.value.length < 1 &&
        e.key !== "4" &&
        e.key !== "5" &&
        e.key !== "6")
    ) {
      e.preventDefault();
      e.stopPropagation();
      errorDigit.classList.add("active");
    } else {
      errorDigit.classList.remove("active");
    }
  };

  const dateValidation = (date) => {
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
      !dateValidation(expiresDate)
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
      <Card card={card} tabIndex="-1" disable={(e) => e.preventDefault()} />
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
              type="text"
              name="card-number"
              value={cardNumberOne}
              placeholder="1456"
              maxLength="4"
              tabIndex="0"
              onChange={(e) => {
                setCardNumberOne(e.target.value);
                inputValidation(e);
              }}
              onKeyPress={(e) => cardNumber(e)}
            />
            <input
              className={`w-1/2 mx-2 error-input ${
                cardNumberTwo.length !== 4 && isSubmitted ? "active" : ""
              }`}
              type="text"
              name="card-number"
              value={cardNumberTwo}
              placeholder="1298"
              maxLength="4"
              tabIndex="1"
              onChange={(e) => {
                setCardNumberTwo(e.target.value);
                inputValidation(e);
              }}
            />
            <input
              className={`w-1/2 mx-2 error-input ${
                cardNumberThree.length !== 4 && isSubmitted ? "active" : ""
              }`}
              type="text"
              name="card-number"
              value={cardNumberThree}
              placeholder="6574"
              maxLength="4"
              tabIndex="2"
              onChange={(e) => {
                setCardNumberThree(e.target.value);
                inputValidation(e);
              }}
            />
            <input
              className={`w-1/2 ml-2 error-input ${
                cardNumberFour.length !== 4 && isSubmitted ? "active" : ""
              }`}
              type="text"
              name="card-number"
              value={cardNumberFour}
              placeholder="1287"
              maxLength="4"
              tabIndex="3"
              onChange={(e) => {
                setCardNumberFour(e.target.value);
                inputValidation(e);
              }}
            />
          </div>
          <span
            className={`error-cardNumber ${
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
          <span className="error-digit">
            Only digit. The first digit must be 4, 5 or 6
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="expiresDate">Expires on</label>
          <input
            className={`error-input ${
              !dateValidation(expiresDate) && isSubmitted ? "active" : ""
            }`}
            type="text"
            name="expiresDate"
            value={expiresDate}
            placeholder="07/23"
            maxLength="5"
            tabIndex="4"
            onChange={(e) => setExpiresDate(e.target.value)}
          />
          <span
            className={`error-message ${
              !dateValidation(expiresDate) && isSubmitted ? "active" : ""
            }`}
          >
            Wrong date
          </span>
        </div>
        <input className="btn-save" type="submit" tabIndex="5" value="Save" />
      </form>
    </div>
  );
};

export default CardForm;
