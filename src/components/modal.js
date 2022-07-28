import ReactDOM from "react-dom";
import React from "react";

export const Modal = (props) => {
  const { explanation, closeModal } = props;
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modalBox">
        <p>{explanation}</p>
        <button onClick={closeModal}>بستن</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
