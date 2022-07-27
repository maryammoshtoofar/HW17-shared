import { Form } from "./components/form";
import { Table } from "./components/table";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const getData = () => {
    fetch(`http://localhost:3001/movies`).then((data) => {
      data.json().then((res) => {
        setMovies(res);
      });
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Form />
      <Table movies={movies} />
    </>
  );
}
export default App;
