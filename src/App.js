import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import AlbumCard from './components/Album/albumCard';
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
function App() {


  //Selecting Artist
  const [artist, setArtist] =  useState();
  const [artistID, setArtistID] =  useState();
  //Collect Album Info
  const [albumInfo, setAlbum] = useState([]);


  useEffect(() => {
      async function getAlbums(){
        const result = await axios.get(`https://itunes.apple.com/lookup?id=${artistID}&entity=album`); 
        setAlbum(result.data.results.slice(1, result.length));
      }
      getAlbums();
  });


  return (
    <div className="App">
      <Navbar />
      <div className="app_content">
        <div className="app_info">


        <h1>Music Project</h1>
        <div className ="dropdown">
        <select  name='artists' value={artist} onChange={(event) =>{
          setArtist(event.target.options[event.target.selectedIndex].text);
          setArtistID(event.target.value);
        }}>
          <option>Select Artist</option>
          <option value = "453523728" label = "Prateek Kuhad"> Prateek Kuhad </option>
          <option value = "479756766" label = "The Weeknd"> The Weeknd </option>
          <option value = "471744" label = "Coldplay"> Coldplay </option>
        </select>
        </div>

        <h3>Let us check all albums of {artist} </h3>
        </div>
        
       
          <div className = "app_album">
            {albumInfo.map(album => {
                return <AlbumCard album={album}/>
          })}

          </div>

    </div>
    <Footer />
    </div>
    
        
  );
}

export default App;
