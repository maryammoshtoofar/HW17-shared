import React from "react";

export const Table = (props) => {
    console.log(props.movies);
  return (
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
        {props.movies.map((mov) => {
          <tr key={mov.id}>
            <td>{mov.id}</td>
            <td>{mov.title}</td>
            <td>{mov.director}</td>
            <td>{mov.genre}</td>
            <td>{mov.year}</td>
            <td>
              <button>توضیحات</button>
            </td>
            <td>
              <button>حذف</button>
            </td>
          </tr>;
        })}
      </tbody>
    </table>
  );
};
