import React from "react";

import { useLocation, Link } from "react-router-dom";

import CoinImg from "../images/menu_coin.png";
import DiceImg from "../images/menu_dice.png";
import NumberImg from "../images/menu_numbers.png";

const Menu = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="Menu">
      <Link to="/coin" className={pathname === "/coin" ? "active" : ""}>
        <img src={CoinImg} alt="" /> Coin
      </Link>
      <Link to="/dice" className={pathname === "/dice" ? "active" : ""}>
        <img src={DiceImg} alt="" /> Dice
      </Link>
      <Link to="/number" className={pathname === "/number" ? "active" : ""}>
        <img src={NumberImg} alt="" /> Number
      </Link>
    </div>
  );
};

export default Menu;
