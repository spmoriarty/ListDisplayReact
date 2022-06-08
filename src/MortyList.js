
import MortyItems from './MortyItems.js';

export default function MortyList({ mortysisms }) {
  return (
    <div> 
      { 
        mortysisms.map((mortyism, i) => <MortyItems {...mortyism} key={mortyism.says + i} />)
      }
    </div>
  );
}

