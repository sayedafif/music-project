import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


function App() {


  //Selecting Artist
  // const [artist, setArtist] =  useState();
  // const [artistID, setArtistID] =  useState();

  //Collect Album Info
  const [albumInfo, setAlbum] = useState([]);


  useEffect(() => {
      async function getAlbums(){
        const result = await axios.get(`https://itunes.apple.com/lookup?id=471744&entity=album`); 
        setAlbum(result.data.results);
      }
      getAlbums();
  });

  return (
    <div className="App">
        <h1>Music Project</h1>
        <div className="row">

        </div>
        {/* 
        <select value={artist} onChange={(event) =>{
          setArtist(event.target.options[event.target.selectedIndex].text);
          setArtistID(event.target.value);
        }}>
          <option value = "453523728" label = "Prateek Kuhad"> Prateek Kuhad </option>
          <option value = "2479756766" label = "The Weeknd"> The Weeknd </option>
          <option value = "471744" label = "Coldplay"> Coldplay </option>
        </select>

        <h3>Your favorite Artist is {artist} </h3> */}
        <h3>Your favorite Artist is Coldplay </h3>
        <div>

          <div>
            {albumInfo.map(album => {
              return <p> {album.artistName}  ---- {album.collectionName}</p>
            })}
          </div>

        </div>
    </div>
  );
}

export default App;
