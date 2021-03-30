import React, { useReducer, useRef, useState, useEffect } from "react";
import "../App.css";
import api from "../utils/api";

function Count(props) {
  console.log(props.flashcardCount);

  const [currentCount, setCount] = useState(props.flashcardCount);
  console.log(currentCount);

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
  }, parseInt(currentCount));
  useEffect(() => {
    const id = props.id;
    console.log(id);
    setCount(parseInt(count));
    api.updateCount(id, { count }).then((results) => {
      props.setCurrentCardCount(results.data.count)
      console.log(results);
    });
  }, [count]);

  return (
    <div className="App">
      <div>{currentCount}</div>

      <img
        id="thumbs"
        className="updown"
        src="./right.png"
        alt=""
        onClick={() => dispatch("add")}
      />

      <img
        id="thumbs"
        className="updown"
        src="./wrong.png"
        alt=""
        onClick={(e) => dispatch("subtract")}
      />
    </div>
  );
}

export default Count;
