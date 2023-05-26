import React, { useState } from "react";
import Score from "./ScoreBtn";
import iconStar from "../images/icon-star.svg";

const Question = ({ listScores, setIsSubmit, score, setScore }) => {
  const [error, setError] = useState(false);
  const handleSubmit = () => {
    if (!score) {
      setError(true);
    } else {
      setIsSubmit(true);
    }
  };

  const handleClickScore = (score) => {
    const listScores = document.querySelectorAll(".ScoreBtn");
    listScores.forEach((scoreE) => {
      if (Number(scoreE.value) === score) {
        scoreE.classList.add("active");
      } else {
        scoreE.classList.remove("active");
      }
    });
    setScore(score);
    setError(false);
  };

  return (
    <div className="Question">
      <div className="icon-star">
        <img src={iconStar} alt="icon-star" />
      </div>
      <div className="title">How did we do?</div>
      <div className="description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </div>
      <div className="list-score-btn">
        {listScores.map((score, idx) => (
          <Score key={idx} score={score} onClick={handleClickScore} />
        ))}
      </div>
      {error && <p className="error">Please select feedback score</p>}

      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Question;
