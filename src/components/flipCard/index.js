import React from "react";
import img from "../../images/exercise.svg";
import "./flipCard.scss";
function FlipCard() {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img} alt="Avatar" />
          <h3>Exercise</h3>
          <div></div>
        </div>
        <div className="flip-card-back">
          <div>lorem </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
