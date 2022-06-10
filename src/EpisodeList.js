
import EpisodeItem from './EpisodeItem.js';


export default function EpisodeList({ episodes }) {
  
  return (
    <div>
      {
        episodes.map((episode, i) => <EpisodeItem {...episode} key={ episode.title + i } />)
                                                //when spreading for array within object, may need to spread after episode. i.e = {...episode.name} ((episode is a booger for next js))
      }
    </div>
  );
}



