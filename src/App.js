import { useSelector } from "react-redux";
import NumCounter from "./components/NumCounter";
import ArtistInput from './components/ArtistInput';
import ArtistCard from './components/ArtistCard';

function App() {
  const artists = useSelector(state => state.artist);
  return (
    <div className="container">
      <div className="m-5">
        <h1>A COUNTER EXAMPLE</h1>
        <NumCounter/>
      </div>

      <div className="m-5">
        <h1>AN ALBUM RATING EXAMPLE</h1>
        <ArtistInput/>
        {artists.map((a) => <ArtistCard artist={a.artist} album={a.album} rating={a.rating}/>)}
      </div>

    </div>
  );
}

export default App;
