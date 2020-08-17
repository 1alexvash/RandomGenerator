import React from "react";

import "./scss/main.css";

import { HashRouter as Router, Route } from "react-router-dom";

import Coin from "./components/Coin";
import Dice from "./components/Dice";
import Numbers from "./components/Numbers";

import Menu from "./Layouts/Menu";

const App = () => {
  const showComponents = (
    <div className="container">
      <Route exact path="/" component={Coin} />
      <Route path="/dice" component={Dice} />
      <Route path="/number" component={Numbers} />
    </div>
  );

  return (
    <Router>
      <div className="App">
        {showComponents}
        <Menu />
      </div>
    </Router>
  );
};

export default App;
