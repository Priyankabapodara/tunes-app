import {React, useState} from 'react'
import { CombinedSongs } from './CombinedSongs';
import AudioPlayer from "react-h5-audio-player";

function SearchedSong(props) {
   
  console.log(props);

    const [song, setSong] = useState();
  const [img, setImage] = useState(props.img);
  const [songname, setSongname] = useState();
  const [artistname, setArtistname] = useState();

  return (
    <div className='Searched'>
      <div className='searchSongContainer'>
        <div className='songImageHolder'>
            <img src={props.imgSrc} alt="abc" />
        </div>
      </div>
    </div>
  )
}

export {SearchedSong}
