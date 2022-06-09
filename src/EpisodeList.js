
import EpisodeItem from './EpisodeItem.js';


export default function EpisodeList({ episodes }) {
  
  return (
    <div>
      {
        episodes.map((episode, i) => <EpisodeItem {...episode} key={ episode.title + i } />)
      }
    </div>
  );
}



