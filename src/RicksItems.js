import React from 'react';

export default function RickItems({ name, dimension, type }) {
  return (
    <div>
      <p>This is {name}</p>
      <p>from the dimension {dimension}</p>
      <p>and he is a {type}</p>

    </div>
  );
}

