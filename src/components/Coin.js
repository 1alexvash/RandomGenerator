import React, { useState } from "react";

import coinSound from "../sounds/coinDrop.mp3";

import HeadImg from "../images/head.png";
import TailImg from "../images/tail.png";

// ADD PICTURE INSTEAD OF CIRCLE
// ANIMATE PICTURE

const Coin = () => {
  const [coin, setCoin] = useState("");
  const [coinText, setCoinText] = useState("---");
  const [animate, setAnimate] = useState(false);

  const playSound = (sound) => {
    const melody = new Audio(sound);
    melody.currentTime = 0;
    melody.play();
  };

  function flipCoin() {
    if (!animate) {
      const side = Math.random() > 0.5 ? "Heads" : "Tails";
      setAnimate(true);
      playSound(coinSound);
      setCoinText("...");
      setTimeout(() => {
        setCoin(side);
      }, 1000);
      setTimeout(() => {
        setAnimate(false);
        setCoinText(side);
      }, 2000);
    }
  }

  return (
    <div className="Coin">
      <div
        className={`picture ${animate ? "active" : ""}`}
        style={{
          backgroundImage: `url(${coin === "Heads" ? HeadImg : TailImg})`,
        }}
      ></div>
      <div className="result">{coinText}</div>
      <button
        className={`throw ${animate ? "disabled" : ""}`}
        onClick={() => flipCoin()}
      >
        Throw a coin
      </button>
    </div>
  );
};

export default Coin;
