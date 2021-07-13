import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [artist, setArtist] =  useState();
  const [artistID, setArtistID] =  useState();
  useEffect(() => {
      async function getAlbums(){
        const result = await axios.get(`https://itunes.apple.com/lookup?id=${ artistID }&entity=album`); 
        console.log(result);
      }
      getAlbums();
  });

  return (
    <div className="container">
        <h1>Music Project</h1>
        <select value={artist} onChange={(event) =>{
          setArtist(event.target.options[event.target.selectedIndex].text);
          setArtistID(event.target.value);
        }}>
          <option value = "453523728" label = "Prateek Kuhad"> Prateek Kuhad </option>
          <option value = "2479756766" label = "The Weeknd"> The Weeknd </option>
          <option value = "471744" label = "Coldplay"> Coldplay </option>
        </select>

        <h3>Your favorite Artist is {artist} </h3>

    </div>
  );
}

export default App;
