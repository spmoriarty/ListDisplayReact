
import './App.css';
import { ricks } from './ricks.js';
import RicksList from './RicksList.js';
import { mortysisms } from './mortyisms.js';
import MortyList from './MortyList.js';


// import your arrays here

function App() {
  
  return (
    <><div>
      <RicksList ricks={ricks} />
    </div>
    <div>
      <MortyList mortysisms={mortysisms} />

    </div>
    
    
    
    </>
  );
}

export default App;
