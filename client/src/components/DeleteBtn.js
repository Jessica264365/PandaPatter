import React from "react";
import "../App.css";
import api from "../utils/api";

function DeleteBtn(props) {
  const handleClick = (event) => {
    api.delete(props.id).then((results) => {
      props.setHiddenClass();
      console.log(results);
    });
  };

  let id = props.id;
  console.log(id);
  return (
    <button className="delete-btn" id="delete" onClick={handleClick}>
      Delete
    </button>
  );
}
export default DeleteBtn;
