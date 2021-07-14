import React from 'react'
import '../../App.css';

export default function albumCard({album}) {
    return (
        <div className="albumCard">
            <img className="albumImage" alt="album_cover_image" src={album.artworkUrl100}/>

            <p className="albumName">{album.collectionName}</p>
        </div>
    )
}
