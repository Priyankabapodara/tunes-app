import "../images/ts.png";
import "../images/Selena-Gomez.png";
import "../images/Shawn-Mendes.jpg";
import "../images/Weeknd.jpg";
import "../images/top hindi 90s.png";
import "../images/top hindi songs.png";
import "../images/TOP ENGLISH SONGS album cover.png";
import "../images/Rewind.png";
import "../Styles/MainContainer.css";
import "../images/top hindi 90s.png";
import React, { useState, useEffect } from "react";
import { FaRegClock, FaHeart, FaRegHeart, FaMobile, FaEnvelope, FaMapPin, FaInstagram, FaFacebook, FaPinterest, FaLinkedin, FaTwitter} from "react-icons/fa";
import "../Styles/musicPlayer.css";
import AudioPlayer from "react-h5-audio-player";
import { TrendingSongs } from "./TrendingSongs";
import { Footer } from "./Footer";

function MainContainer() {
  const [songs, setSongs] = useState(TrendingSongs);
  const [song, setSong] = useState(TrendingSongs[0].song);
  const [img, setImage] = useState(TrendingSongs[0].imgSrc);
  const [songname, setSongname] = useState(TrendingSongs[0].songName);
  const [artistname, setArtistname] = useState(TrendingSongs[0].artist);

  useEffect(() => {
    const songs = document.querySelectorAll(".thirdContainer");
    function changeSongActive() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    songs.forEach((n) => n.addEventListener("click", changeSongActive));
  }, []);

  const setMainSong = (songSrc, imgSrc, songnameSrc, artistSrc) => {
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
    <div className="MainContainer">
      <div className="qContainer">
        <div className="tContainer">
          <div className="top-title">
            <h3>Trending&nbsp; Songs</h3>
            <br></br>
            <br></br>
          </div>
          <div className="firstContainer">
            <div className="secondContainer">
              {songs &&
                songs.map((song, index) => (
                  <div
                    className="thirdContainer"
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
                    <div className="ImageHolder">
                      <div className="imgBox">
                        <img src={song?.imgSrc} alt="" />
                      </div>
                    </div>
                    <div className="InfoHolder">
                      <p className="songName">{song?.songName}</p>
                      <p className="artistName">{song?.artist}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="top-title">
          <h3>Featured&nbsp; Artists</h3>
          <br></br>
          <br></br>
        </div>
        <div className="fContainer">
          <div className="artistimg">
            <a href="/TaylorSwift"><img src={require("../images/ts.png")} alt="tay"></img></a>
            <a href="/ShawnMendes"><img src={require("../images/Shawn-Mendes.jpg")} alt="shaw"></img></a>
            <a href="/SelenaGomez"><img src={require("../images/Selena-Gomez.png")} alt="sel"></img></a>
            <a href="/TheWeeknd"><img src={require("../images/Weeknd.jpg")} alt="week"></img></a>
          </div>
        </div>
        <div className="top-title">
          <h3>Top&nbsp; Albums</h3>
          <br></br>
          <br></br>
        </div>
        <div className="albumContainer">
          <div className="firstAlbums">
            <div className="albholder">
              <div className="albimg">
                <a href="/Rewind"><img src={require("../images/Rewind.png")} alt="rew"></img></a>
                <a href="/TopEnglish"><img
                  src={require("../images/TOP ENGLISH SONGS album cover.png")}
                  alt="TES"
                ></img></a>
              </div>

              <div className="albinfo">
                <p className="rewindinfo">Rewind</p>
                <p className="TESinfo">Top English</p>
              </div>
            </div>
            <div className="secondAlbums">
              <div className="albholder">
                <div className="albimg">
                <a href="/TopHindi"><img
                    src={require("../images/top hindi songs.png")}
                    alt="rew"
                  ></img></a>
                  <a href="/TopHindi90s"><img
                    src={require("../images/top hindi 90s.png")}
                    alt="TES"
                  ></img></a>
                </div>

                <div className="albinfo">
                  <p className="rewindinfo">Top Hindi</p>
                  <p className="TESinfo">Top Hindi 90s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footerContainer">
            <div className="copyright-section">
              <div className="log">
              <img
                src={require("../images/colored-logo-tunes.png")}
                alt="logo"
              />
              <h4>T&nbsp;U&nbsp;N&nbsp;E&nbsp;S</h4>
              </div>
              <p>All Rights Reserved</p>
              <p>Copyright&nbsp;©&nbsp;|&nbsp;2022&nbsp;|&nbsp;Tunes</p>
            </div>
            <div className="horizontal"></div>
            <div className="about">
              <h6>About Us:</h6>
              <p>With Tunes, it's easy to find the right music for every moment. There are millions of tracks on Tunes. So whether you're behind the wheel, working out, partying or relaxing, the right music is always at your fingertips. Choose what you want to listen to, or let Tunes surprise you.</p>
              <h6>Contact Us:</h6>
              <div className="contact">
                <i><FaMobile /></i>
                <p>+91 8495873902</p>
                <i><FaEnvelope /></i>
                <p>tunes.support@gmail.com</p>
                <i><FaMapPin /></i>
                <p>Gurgaon</p>
              </div>
            </div>
            <div className="horizontal"></div>
            <div className="social">
              <i><FaInstagram /></i>
              <i><FaFacebook /></i>
              <i><FaLinkedin /></i>
              <i><FaTwitter /></i>
              <i><FaPinterest /></i>
            </div>
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
              autoPlay = {false}
              src={song}
              onPlay={(e) => console.log("onPlay")}
              // other props here
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { MainContainer };
