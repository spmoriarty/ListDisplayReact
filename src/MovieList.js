import React from 'react';
import MovieItem from './MovieItem.js';

export default function MovieList({ movies }) {
  return (
    <div>
      {
        movies.map((movie, i) =><MovieItem {...movie} key={movie.title + i}/>)
      }
    </div>
  );
}

