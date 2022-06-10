import React from 'react';

export default function MovieItem({ title, part, details }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{part}</h3>
      <p>{details.director}</p>
      <p>{details.release}</p>
    </div>
  );
}

