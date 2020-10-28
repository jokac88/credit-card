import React, { useState } from "react";

function CardForm({ card }) {
  const [name, setName] = useState("");
  const [cardNumberOne, setcardNumberOne] = useState("");
  const [cardNumberTwo, setcardNumberTwo] = useState("");
  const [cardNumberThree, setcardNumberThree] = useState("");
  const [cardNumberFour, setcardNumberFour] = useState("");
  const [expires, setExpires] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorName = document.querySelector(".error-message-name");
    const errorCardNumber = document.querySelector(
      ".error-message-card-number"
    );
    const errorExpires = document.querySelector(".error-message-expires");

    name.length <= 0
      ? errorName.classList.add("active")
      : errorName.classList.remove("active");

    cardNumberOne.length !== 4 ||
    cardNumberTwo.length !== 4 ||
    cardNumberThree.length !== 4 ||
    cardNumberFour.length !== 4
      ? errorCardNumber.classList.add("active")
      : errorCardNumber.classList.remove("active");

    expires.length <= 0
      ? errorExpires.classList.add("active")
      : errorExpires.classList.remove("active");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="error-message error-message-name">
          Name can't be blank
        </span>
      </div>
      <label htmlFor="card-number">Card Number</label>
      <div className="form-field">
        <div className="flex w-full">
          <input
            className="w-1/4 mx-2"
            type="number"
            name="card-number"
            onChange={(e) => setcardNumberOne(e.target.value)}
          />
          <input
            className="w-1/4 mx-2"
            type="number"
            name="card-number"
            onChange={(e) => setcardNumberTwo(e.target.value)}
          />
          <input
            className="w-1/4 mx-2"
            type="number"
            name="card-number"
            onChange={(e) => setcardNumberThree(e.target.value)}
          />
          <input
            className="w-1/4 mx-2"
            type="number"
            name="card-number"
            onChange={(e) => setcardNumberFour(e.target.value)}
          />
        </div>
        <span className="error-message error-message-card-number">
          Wrong card number
        </span>
      </div>
      <div className="form-field">
        <label htmlFor="expires">Expires on</label>
        <input
          type="text"
          name="expires"
          value={expires}
          onChange={(e) => setExpires(e.target.value)}
        />
        <span className="error-message error-message-expires">Wrong date</span>
      </div>
      <input
        className="btn-save"
        type="submit"
        value="Save"
        // disabled={
        //   name.length <= 0 ||
        //   cardNumberOne.length < 4 ||
        //   cardNumberTwo.length < 4 ||
        //   cardNumberThree.length < 4 ||
        //   cardNumberFour.length < 4 ||
        //   expires.length < 5
        //     ? "disabled"
        //     : ""
        // }
      />
    </form>
  );
}

export default CardForm;
