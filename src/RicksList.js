
import React from 'react';
import RickItems from './RicksItems';

export default function RicksList({ ricks }) {
  
  return (<div>
    { 
      ricks.map((rick, i) => <RickItems key={rick.name + i} {...rick} />) 
    }
  </div>);
}

