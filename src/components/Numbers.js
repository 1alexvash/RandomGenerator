import React, { useState } from "react";

import Spinner from "../Layouts/Spinner";

const Numbers = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  const [result, setResult] = useState(null);

  const [showSpinner, setShowSpinner] = useState(false);

  const [warning, setWarning] = useState("");

  const generateRandom = (e) => {
    e.preventDefault();

    if (min < max) {
      setShowSpinner(true);

      setWarning("");
      setResult(null);
      setTimeout(() => {
        setResult(Math.round(Math.random() * (max - min)) + min);
        setShowSpinner(false);
      }, 1000);
    } else {
      setWarning("Min value should be less than maximum value");
    }
  };

  const updateValue = (e, input) => {
    if (showSpinner) return;

    const value = parseInt(e.target.value);
    e.target.value = value;

    if (input === "min") {
      setMin(value);
    }

    if (input === "max") {
      setMax(value);
    }
  };

  return (
    <form onSubmit={generateRandom} className="Numbers">
      <div className="flex-wrapper">
        <div>
          <p>From:</p>
          <input
            type="number"
            value={min || 0}
            min="0"
            required
            onChange={(e) => updateValue(e, "min")}
          />
        </div>
        <div>
          <p>To:</p>
          <input
            type="number"
            value={max || 0}
            min="0"
            required
            onChange={(e) => updateValue(e, "max")}
          />
        </div>
      </div>
      <div className="warning">{warning}</div>
      <div className="results">{result}</div>
      {showSpinner ? (
        <Spinner />
      ) : (
        <button type="submit" className="generate">
          Generate a number
        </button>
      )}
    </form>
  );
};

export default Numbers;
