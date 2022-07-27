import ReactDOM from "react-dom";
import React from "react";

export const Modal = (explanation, onClose) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modalBox">
        <p>{explanation.explanation}</p>
        <button onClick={() => onClose()}>بستن</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
