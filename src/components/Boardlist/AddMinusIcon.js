import React from "react";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";

function AddMinusIcon({ isAddingBoard, onClick }) {
  let icon = isAddingBoard ? minus : plus;

  return (
    <img src={icon} className="btn-icon" alt="add board" onClick={onClick} />
  );
}

export default AddMinusIcon;
