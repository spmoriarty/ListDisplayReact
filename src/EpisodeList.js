import EpisodeItem from './EpisodeItem.js';


export default function EpisodeList({ episodes }) {
  
  return (<div>
    {
      episodes.map((episode, i) => <EpisodeItem key={episode.title + i} {...episode.title.character} />)
    }
  </div>);
}

