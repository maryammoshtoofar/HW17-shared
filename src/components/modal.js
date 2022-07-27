import  ReactDOM  from "react-dom";
import React from 'react'

export const Modal = (explanation) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modalBox">
        <p>{explanation}</p>
      </div>
    </div>,
    document.getElementById('portal')
  );
};
