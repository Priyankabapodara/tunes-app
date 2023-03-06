import "../images/colored-logo-tunes.png";
import "../Styles/NavBar.css";
import { FaItunes, FaSearch, FaSun } from "react-icons/fa";
import { React, useState, useEffect, useRef } from "react";
import { List } from "./List";
import { CombinedSongs } from './CombinedSongs'
import "../Styles/List.css"
import "../Styles/musicPlayer.css";
import AudioPlayer from "react-h5-audio-player";
import { FaRegClock, FaHeart, FaRegHeart, FaMobile, FaEnvelope, FaMapPin, FaInstagram, FaFacebook, FaPinterest, FaLinkedin, FaTwitter} from "react-icons/fa";
import { SearchedSong } from "./SearchedSong";


function NavBar() {

  const ref = useRef()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isMenuOpen])

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };


  const [song, setSong] = useState();
  const [img, setImage] = useState(CombinedSongs[0].imgSrc)
  const [songname, setSongname] = useState(CombinedSongs[0].songName);
  const [artistname, setArtistname] = useState(CombinedSongs[0].artist);

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

{/* const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", () => {
      setShowModal(false);
    });
  });*/}

   //create a new array by filtering the original array
   const filteredData = CombinedSongs.filter((el) => {
    //if no input the return the original
    if (inputText === '') {
        return "";
    }
    //return the item which contains the user input
    else {
        return el.songName.toLowerCase().includes(inputText)
    }
})

  return (
    <nav className="navbar">
      <div className="mContainer">
        <div className="logoContainer">
          <img src={require("../images/colored-logo-tunes.png")} alt="logo" />
          <h4> T&nbsp;U&nbsp;N&nbsp;E&nbsp;S </h4>
        </div>
        <div className="searchContainer">
          <div className="SearchBox">
            <input
              type="text"
              onChange={inputHandler}
              onClick={() => setIsMenuOpen(true)}
            />
            <i className="SearchIcon">
              <FaSearch />
            </i>
          </div>
        </div>

        

        
        {isMenuOpen && (
      <ul className='list' ref={ref} >
        
            {filteredData.map((item) => (
                <li key={item.id}  onClick={() =>
                  setMainSong(
                    item?.song,
                    item?.imgSrc,
                    item?.songName,
                    item?.artist,
                    
                  )
                }>{item.songName}</li>
            ))}
            
        </ul>
          )}
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
    
     
    </nav>
  );
}

export { NavBar };
