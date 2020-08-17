import React, { useState } from "react";

import DiceCube from "./DiceCube";

import diceSound from "../sounds/diceRoll.mp3";

const Dice = () => {
  const [position, setPosition] = useState(0);
  const [animate, setAnimate] = useState(false);

  const getRandomNumber = () => Math.ceil(Math.random() * 6);

  const playSound = (sound) => {
    const melody = new Audio(sound);
    melody.currentTime = 0;
    melody.play();
  };

  const throwingDice = () => {
    setAnimate(true);

    setPosition(0); // hack to start over the animation
    setTimeout(() => {
      setPosition(getRandomNumber());
      playSound(diceSound);
    }, 10);
    setTimeout(() => {
      setAnimate(false);
    }, 4000);
  };

  return (
    <div className="Dice">
      <div className="cube">
        <DiceCube position={position} animate={animate} />
      </div>
      <button
        className={`throw ${animate ? "disabled" : ""}`}
        disabled={animate}
        onClick={throwingDice}
      >
        Throw a dice
      </button>
    </div>
  );
};

export default Dice;
