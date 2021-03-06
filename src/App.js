import { useState } from "react";
import './App.css';
import {data }from "./data"
import MovieList from "./components/MovieList"
import Filter from "./components/Filter"
import { Navbar } from "react-bootstrap";
function App() {
  const [movies, setMovies] = useState(data);
  const [titler, setTitler] = useState("");
  const [rater, setRater] = useState(0)


  const ChangeTitle = (e) => {
    setTitler(e.target.value);
  };
  const ChangeRate = (newRating) => {
    setRater(newRating)
  
  };
  const AddMovie = (newFilm) => {
    setMovies([...movies, newFilm]);
    console.log(movies);
  };

  return (
    <div >
    
  <Filter ChangeTitle={ChangeTitle} titlee={titler} ChangeRate={ChangeRate}  AddMovie={AddMovie}/>
    <MovieList
        movies={movies.filter((movie) =>
          movie.title.trim().toLowerCase().includes(titler.trim().toLowerCase()) && movie.rate>=rater
        )}
      />
       
    </div>
  );
}

export default App;
