import React, { useReducer, useRef } from "react";
import "../App.css";

function Count() {
  const inputRef = useRef();

  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "subtract":
        return state - 1;
      case "change":
        // convert the value from the input into an integer
        const newCount = parseInt(inputRef.current.value);

        // only update the count if the value is numeric
        if (isNaN(newCount)) {
          return state;
        }
        return newCount;
      default:
        return state;
    }
  }, 0);

  // const handleRequestClick = (e) => {
  //   // this will stop the bubbling effect of the parent and child click events
  //   e.stopPropagation();
  // };

  return (
    <div className="App">
      <div>{count}</div>

      <img
        id="thumbs"
        className="updown"
        src="./right.png"
        alt=""
        // onClick={(e) => handleRequestClick(e)}
        onClick={() => dispatch("add")}
      />

      {/* <button className="btn btn-success mt-5 mb-5" onClick={() => dispatch("add")}>
        Add
      </button> */}

      <img
        id="thumbs"
        className="updown"
        src="./wrong.png"
        alt=""
        onClick={(e) => dispatch("subtract")}
      />
      {/* <button className="btn btn-danger mt-5" onClick={() => dispatch("subtract")}>
        Subtract
      </button> */}
    </div>
  );
}

export default Count;
