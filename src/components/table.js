import React from "react";
import {Modal} from "./modal";

export const Table = (props) => {

  const{movies,deleteMovie,openModal,closeModal,showModal}=props
  return (
    <>
        <table>
        <thead>
            <tr>
            <th>ردیف</th>
            <th>نام فیلم</th>
            <th>کارگردان</th>
            <th>ژانر فیلم</th>
            <th>سال ساخت</th>
            <th>توضیحات</th>
            <th>حذف</th>
            </tr>
        </thead>
        <tbody>
            {movies.map((mov) => (
            <tr key={mov.id}>
                <td>{mov.id}</td>
                <td>{mov.title}</td>
                <td>{mov.director}</td>
                <td>{mov.genre}</td>
                <td>{mov.year}</td>
                <td>
                <button onClick={()=>openModal()}>توضیحات</button>
                        {showModal && (
                            <Modal explanation={mov.explanation}/>
        )}
                </td>
                <td>
                <button onClick={(e)=>deleteMovie(e,mov.id)}>حذف</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>


    </>
  );
};
