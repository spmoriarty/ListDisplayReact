
import MortyItems from './MortyItems.js';

export default function MortyList({ mortysisms }) {
  return (
    <div> 
      { 
        mortysisms.map((mortyism, i) => <MortyItems mortyisms={mortyism} key={mortyism + i} />)
      }
    </div>
  );
}

