import React, { useEffect } from "react";
import "../App.css";
import api from "../utils/api";
function DeleteBtn(props) {
  //   const handleClick = (event) => {
  //     api.delete(props.id).then((results) => {

  //       console.log(results);
  //     });
  //   };
  //   useEffect(() => {}, [handleClick]);
  let id = props.id;

  return (
    <button className="delete-btn" id="delete" onClick={props.handleDeleteClick(id)}>
      Delete
    </button>
  );
}
export default DeleteBtn;
