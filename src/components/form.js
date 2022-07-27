import React from 'react'

export const Form = () => {
  return (
    <div>
      <form>
        <label>نام فارسی</label>
        <input name="title" placeholder="نام فیلم را وارد کنید" />
        <select>
          <option>وحشت/تخیلی</option>
          <option>کمدی</option>
          <option>درام</option>
        </select>
        <textarea placeholder="توضیحات درباره فیلم"></textarea>
        <input name="director" placeholder="نام کارگردان را وارد کنید" />
        <input name="year" placeholder="سال تولید را وارد کنید" />
        <button>ذخیره</button>
        <button>انصراف</button>
      </form>
    </div>
  );
}
