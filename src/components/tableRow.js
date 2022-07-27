import React, { useState } from "react";
import { Modal } from "./modal";

function TableRow({ id, title, director, genre, year, explanation }) {
  const [showModal, setshowModal] = useState(false);
  const closeModal = () => {
    setshowModal(false);
  };
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{director}</td>
      <td>{genre}</td>
      <td>{year}</td>
      <td>
        <button onClick={() => setshowModal(true)}>توضیحات</button>
        {showModal && <Modal explanation={explanation} onClose={closeModal} />}
      </td>
      <td>
        <button>حذف</button>
      </td>
    </tr>
  );
}
// onClick={(e) => deleteMovie(e, mov.id)}
export default TableRow;
