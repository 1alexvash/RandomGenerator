import React from "react";

import diceSound from "../sounds/diceRoll.mp3";

const DiceCube = ({ position }) => (
  <div className="dice-container">
    <div className={`dice position-${position}`}>
      <div className="front">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="back">
        <span></span>
      </div>
      <div className="right">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="left">
        <span></span>
        <span></span>
      </div>
      <div className="top">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bottom">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
);

export default DiceCube;
