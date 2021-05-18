import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Faqs",
      handler: props.actionProvider.handleFaq,
      id: 1,
    },
    { text: "Book",
      handler: props.actionProvider.handleBooking,
      id: 2 },
    { text: "Timings", handler: props.actionProvider.handleTimings, id: 3 },
    { text: "Contact",
      handler: props.actionProvider.handleContact,
      id: 4 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
