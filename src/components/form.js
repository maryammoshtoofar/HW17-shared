import React, { useState } from "react";

export const Form = ({addMovie}) => {
  const [formInfo, setFormInfo] = useState({
    title: "",
    genre: "وحشت/تخیلی",
    explanation: "",
    director: "",
    year:"",
  });
  const { title, genre, explanation, director, year } = formInfo;
  const handleChange=(e)=>{
    // console.log(e.target.value);
    // console.log(e.target.name)
    const{value,name}=e.target
    setFormInfo({...formInfo,[name]:value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newMovie = {
      title: title,
      genre: genre,
      explanation: explanation,
      director: director,
      year: year
    };
    addMovie(newMovie);
    clearInputs();
  }
  const clearInputs=()=>{
    setFormInfo({
        title: "",
        genre: "",
        explanation: "",
        director: "",
        year: "",
    });
  }

  const cancleSubmit=(e)=>{
    e.preventDefault()
    clearInputs();
  }
  
  return (
    <div>
      <form>
        <label>نام فارسی</label>
        <input
          name="title"
          value={title}
          placeholder="نام فیلم را وارد کنید"
          onChange={(e) => handleChange(e)}
        />
        <select name="genre" onChange={(e) => handleChange(e)}>
          <option value={genre}>وحشت/تخیلی</option>
          <option value="کمدی">کمدی</option>
          <option value="درام">درام</option>
        </select>
        <textarea
          name="explanation"
          placeholder="توضیحات درباره فیلم"
          onChange={(e) => handleChange(e)}
          value={explanation}
        ></textarea>
        <input
          name="director"
          placeholder="نام کارگردان را وارد کنید"
          onChange={(e) => handleChange(e)}
          value={director}
        />
        <input
          name="year"
          placeholder="سال تولید را وارد کنید"
          onChange={(e) => handleChange(e)}
          value={year}
        />
        <button onClick={handleSubmit}>ذخیره</button>
        <button onClick={cancleSubmit}>انصراف</button>
      </form>
    </div>
  );
}
