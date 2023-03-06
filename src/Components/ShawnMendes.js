
import "../images/Shawn-Mendes.jpg";
import React, { useState, useEffect} from "react";
import "../Styles/ShawnMendes.css";
import { FaRegClock, FaHeart, FaRegHeart } from "react-icons/fa";
import { ShawnSongs } from "./ShawnSongs";
import "../Styles/musicPlayer.css";
import AudioPlayer from "react-h5-audio-player";

function ShawnMendes() {
    const [songs, setSongs] = useState(ShawnSongs);
  const [song, setSong] = useState(ShawnSongs[0].song);
  const [img, setImage] = useState(ShawnSongs[0].imgSrc);
  const [songname, setSongname] = useState(ShawnSongs[0].songName);
  const [artistname, setArtistname] = useState(ShawnSongs[0].artist);

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");
    function changeSongActive() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    songs.forEach((n) => n.addEventListener("click", changeSongActive));
  }, []);

  const changeFavourite = (id) => {
    ShawnSongs.forEach((song) => {
      if (song.id === id) {
        song.favourite = !song.favourite;
      }
    });
    setSongs([...ShawnSongs]);
  };

  const setMainSong = (
    songSrc,
    imgSrc,
    songnameSrc,
    artistSrc,
  ) => {
    setSong(songSrc);
    setImage(imgSrc);
    setSongname(songnameSrc);
    setArtistname(artistSrc);
  };

  const [isLove, setLoved] = useState(false);

  const changeLoved = () => {
    setLoved(!isLove);
  };


  return (
    <div className="Shawn">
      <div className="sContainer">
        <h3>Shawn Mendes</h3>
        <br></br>
        <img className="top" src={require("../images/Shawn-Mendes.jpg")} alt="Shawn" />
        <br></br>
        <div className="Shawsonglist">
          <h2 className="title">
            The List<span> / 5 songs</span>
          </h2>
          <div className="songsContainer">
            {songs &&
              songs.map((song, index) => (
                <div
                  className="songs"
                  key={song?.id}
                  onClick={() =>
                    setMainSong(
                      song?.song,
                      song?.imgSrc,
                      song?.songName,
                      song?.artist,
                      song?.time
                    )
                  }
                >
                  <div className="count">{`#${index + 1}`}</div>
                  <div className="song">
                    <div className="imgBox">
                      <img src={song?.imgSrc} alt="" />
                    </div>

                    <div className="section">
                      <p className="songName">{song?.songName}</p>
                      <div className="durations">
                        <p className="duration">
                          <i>
                            <FaRegClock />
                          </i>
                          {song?.time}
                        </p>
                        <div
                          className="favourite"
                          onClick={() => changeFavourite(song?.id)}
                        >
                          {song?.favourite ? (
                            <i>
                              <FaHeart />
                            </i>
                          ) : (
                            <i>
                              <FaRegHeart />
                            </i>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="rightPanel">
        <div className="rContainer">
          <div className="top">
            <h4>Current Playing</h4>
            <hr />
          </div>
          <div className="middle">
            <div className="middle-top">
              <div className="loved" onClick={changeLoved}>
                {isLove ? (
                  <i>
                    <FaHeart />
                  </i>
                ) : (
                  <i>
                    <FaRegHeart />
                  </i>
                )}
              </div>
              <div className="songImage">
                <img src={img} alt="alb" />
              </div>
            </div>
            <div className="middle-bottom">
              <div className="songInfo">
                <p className="songname">{songname}</p>
                <p className="songartist">{artistname}</p>
              </div>
            </div>
          </div>
        <div className="bottom-top">
        <AudioPlayer
            autoPlay
            src={song}
            onPlay={(e) => console.log("onPlay")}
            // other props here
          />
        </div>
      </div>
      
    </div>
    </div>
  )
}


export {ShawnMendes}
