
import './App.css';
import { ricks } from './ricks.js';
import RicksList from './RicksList.js';
import { mortysisms } from './mortyisms.js';
import MortyList from './MortyList.js';
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

    </div>
    
    
    
    </>
  );
}

export default App;
