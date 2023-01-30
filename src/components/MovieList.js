import React, { useState } from 'react';

function MovieList(props) {
  const FavouriteComponent = props.favouritecomponent;
  const [addFavourities, setAddFavourities] = useState(null);
  return (
    <>
      {props.movies.map(movie => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movies" />
          <div className="overlay d-flex justify-content-center align-items-center">
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieList;
