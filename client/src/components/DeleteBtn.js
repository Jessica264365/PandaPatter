import React, { useState } from "react";
import "../App.css";
import "../style/Main.css";
import api from "../utils/api";

function DeleteBtn(props) {
  const [deletePrompt, setDeletePrompt] = useState(false);

  const handleClick = (event) => {
    api.delete(props.id).then((results) => {
      props.setHiddenClass();
      console.log(results);
    });
  };
  const handleDelete = (event) => {
    props.areYouSure(true);
    setDeletePrompt(true);
  };
  const handleCancelDelete = () => {
    setDeletePrompt(false);
    props.areYouSure(false);
  };

  let id = props.id;
  console.log(id);
  return (
    <>
      {deletePrompt === true ? (
        <div>
          <button onClick={handleClick}>Yes</button>
          <button onClick={handleCancelDelete}>No </button>
        </div>
      ) : (
        <button className="delete-btn btns1" id="delete" onClick={handleDelete}>
          x
        </button>
      )}
    </>
  );
}
export default DeleteBtn;
