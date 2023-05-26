import React from "react";

const ScoreBtn = ({ score, onClick }) => {
  return (
    <button className="ScoreBtn" value={score} onClick={() => onClick(score)}>
      {score}
    </button>
  );
};

export default ScoreBtn;
