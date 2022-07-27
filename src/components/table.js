import React from 'react';

export const Table = (props) => {
    const[movies]=props
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
        {movies.map((mov)=>
        {
          <tr>
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
        }
        )
        }
      </tbody>
    </table>
  );
}
