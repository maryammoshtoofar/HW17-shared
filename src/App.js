import { Form } from "./components/form";
import { Table } from "./components/table";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const getData = () => {
    fetch(`http://localhost:3001/movies`).then((data) => {
      data.json().then((res) => {
        setMovies(res);
      });
    });
  };
  const deleteMovie=(e,id)=>{
    e.preventDefault();
    fetch(`http://localhost:3001/movies/${id}`,{method:"DELETE"}).then(()=>{
      const filteredMovies=movies.filter((mov)=>mov.id!==id)
      setMovies(filteredMovies);
    }

    )
  }
  const openModal=()=>{
    setshowModal(true);
  }
  const closeModal = () => {
    setshowModal(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Form />
      <Table
        movies={movies}
        deleteMovie={deleteMovie}
        openModal={openModal}
        closeModal={closeModal}
        showModal={showModal}
      />
    </>
  );
}
export default App;
