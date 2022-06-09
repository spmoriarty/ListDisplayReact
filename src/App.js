
import './App.css';
import RicksList from './RicksList.js';
import { ricks } from './ricks.js';
import MortyList from './MortyList.js';
import { mortysisms } from './mortyisms.js';
import EpisodeList from './EpisodeList.js';
import { episodes } from './episodes.js';




// import your arrays here

function App() {
  
  return (
    <><div>
      <RicksList ricks={ricks} />
      <hr/>
      <MortyList mortysisms={mortysisms} />
      <hr />
      <EpisodeList episodes={episodes} />
      <hr />


    </div>
    
    
    
    </>
  );
}

export default App;
