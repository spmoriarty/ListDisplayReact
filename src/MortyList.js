import React from 'react';
import MortyItems from './MortyItems.js';

export default function MortyList({ mortysisms }) {
        console.log(mortysisms);
    return (<div> 
    { 
      mortysisms.map((mortyism, i) => <MortyItems mortyism={mortyism} key={mortyism + 1} />)
    }
  </div>);
}

