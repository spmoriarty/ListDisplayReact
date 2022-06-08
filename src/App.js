import logo from './logo.svg';
import './App.css';
import Ricks from './ricks.js';
import RicksList from './RicksList.js';

// import your arrays here

function App() {
  return (
    <div>
      <RicksList ricks={ricks} />
    </div>
  );
}

export default App;
