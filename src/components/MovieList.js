import React, { useState } from "react";

function MovieList(props) {
  const FavouriteComponent = props.favouritecomponent;
  return (
    <>
      {props.movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="image-container d-flex justify-content-start m-3"
        >
          <img src={movie.Poster} alt="movies" />
          <div
            onClick={() => {
              props.handleFavourities(movie);
            }}
            className="overlay d-flex justify-content-center align-items-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieList;
