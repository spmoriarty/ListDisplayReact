

export default function EpisodeItem({ title, plot, characters }) {
  return (
    <div> 
      <h2>Episode: {title}</h2>
      <p>What happens: {plot}</p>
      <p>The players: {characters}</p>
    </div>
  );
}

