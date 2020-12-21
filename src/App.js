import React, { useState } from 'react';

import { Moviedata } from './components/Moviedata';
import SearchMovie from './components/Searchmovie/Searchmovie';
import MoviesList from './components/MovieList/MoviesList';
import AddMovie from './components/Addmovie/Addmovie';

import './App.css';

function App() {
  const [moviesList, setMoviesList] = useState(Moviedata);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };
  
  return (
    <div className="App">
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
    </div>
  );
}

export default App;
