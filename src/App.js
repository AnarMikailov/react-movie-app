import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import MovieListHeading from "./components/MovieListHeading";
import AddFavourities from "./components/AddFavourities";
import RemoveFavourities from "./components/RemoveFavourities";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourities, setFavourities] = useState([]);
  const [search, setSearch] = useState("");

  const inputChangeHandler = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
  };
  const fetchApi = async (search) => {
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
  const saveLocalStorage = (items) => {
    localStorage.setItem("movies", JSON.stringify(items));
  };
  useEffect(() => {
    const movieFavourities = JSON.parse(localStorage.getItem("movies"));
    setFavourities(movieFavourities);
  }, []);
  const addFavouritiesHandler = (movie) => {
    const newFavourities = [...favourities, movie];

    if (!favourities.includes(movie)) {
      setFavourities(newFavourities);
    }
    saveLocalStorage(movies);
  };
  const removeFavouritiesHandler = (movie) => {
    const filetered = favourities.filter((el) => el != movie);
    setFavourities(filetered);
    saveLocalStorage(filetered);
  };

  return (
    <div className="container-fluid  movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <Search inputChangeHandler={inputChangeHandler} />
      </div>

      <div className="row">
        <MovieList
          handleFavourities={addFavouritiesHandler}
          favouritecomponent={AddFavourities}
          movies={movies}
        />
      </div>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourities" />
      </div>
      <div className="row">
        <MovieList
          handleFavourities={removeFavouritiesHandler}
          favouritecomponent={RemoveFavourities}
          movies={favourities}
        />
      </div>
    </div>
  );
}

export default App;
