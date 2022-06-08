import React from 'react';

export default function RickItems({ name, dimension, type }) {
  return (
    <div>
      <p>{name}</p>
      <p>{dimension}</p>
      <p>{type}</p>

    </div>
  );
}

