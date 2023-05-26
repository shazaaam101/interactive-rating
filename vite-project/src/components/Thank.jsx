import React from "react";
import svgImg from "../images/illustration-thank-you.svg";

const Thank = ({ listScores, score }) => {
  return (
    <div className="Thank">
      <img src={svgImg} alt="thank" />
      <div className="show-score">
        You selected {score} out of {listScores.length}
      </div>
      <h3 className="title">Thank you!</h3>
      <p className="description">
        We appreciate you taking the time to give a raing. If you ever need more
        support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Thank;
