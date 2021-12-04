import React from "react";
import './calculator.css';

const Display = props => {
  return (
    <div className="item display">
      <p className="expression">{props.expression}</p>
      <p className="result">{props.result}</p>
    </div>
  );
};

const Calculator = props => {
  return (
    <div className="contCalc" onClick={props.handleClick}>
      <button className="item ac" value="AC">
        AC
      </button>
      <button className="item divide" value="/">
        /
      </button>
      <button className="item multiply" value="*">
        X
      </button>
      <button className="item number" value="7">
        7
      </button>
      <button className="item number" value="8">
        8
      </button>
      <button className="item number" value="9">
        9
      </button>
      <button className="item" value="-">
        -
      </button>
      <button className="item number" value="4">
        4
      </button>
      <button className="item number" value="5">
        5
      </button>
      <button className="item number" value="6">
        6
      </button>
      <button className="item" value="+">
        +
      </button>
      <button className="item number" value="1">
        1
      </button>
      <button className="item number" value="2">
        2
      </button>
      <button className="item number" value="3">
        3
      </button>
      <button className="item equals" value="Finish">
        Finish
      </button>
      <button className="item zero" value="0">
        0
      </button>
      <button className="item dot" value=".">
        .
      </button>
    </div>
  );
};

export default Calculator;
