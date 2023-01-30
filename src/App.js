import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Search from './components/Search';
import MovieListHeading from './components/MovieListHeading';
import AddFavourities from './components/AddFavourities';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const inputChangeHandler = e => {
    e.preventDefault();
    if (e.target.value) {
      setSearch(e.target.value);
    }
  };
  const fetchApi = async search => {
    const url = ` http://www.omdbapi.com/?s=${search}&apikey=bbf8f75e`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    fetchApi(search);
  }, [search]);
  return (
    <div className="container-fluid  movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <Search inputChangeHandler={inputChangeHandler} />
      </div>

      <div className="row">
        <MovieList favouritecomponent={AddFavourities} movies={movies} />
      </div>
    </div>
  );
}

export default App;
