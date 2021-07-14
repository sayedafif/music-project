import React from 'react'
import '../../App.css';

export default function albumCard({album}) {
    return (
        <div className="albumCard">
            <a href={album.collectionViewUrl} target="_blank" rel="noopener noreferrer">
            <img className="albumImage" alt="album_cover_image" src={album.artworkUrl100}/>

            <h4 className="albumName">{album.artistName}</h4>
            <p className="albumName">{album.collectionName}</p>
            </a>
        </div>
    )
}
