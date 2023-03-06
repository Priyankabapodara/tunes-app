import React from 'react'
import "../images/colored-logo-tunes.png";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='footerContainer'>
        <div className='copyright-section'>
          <img src={require("../images/colored-logo-tunes.png")} alt='logo' />
          <h3>T&nbsp;U&nbsp;N&nbsp;E&nbsp;S</h3>
          <p>All Rights Reserved</p>
          <p>Copyright&nbsp;©&nbsp;|&nbsp;2022&nbsp;|&nbsp;Tunes</p>
        </div>
        <div className='horizontal'></div>
        <div className='about'></div>
      </div>
    </div>
  )
}

export {Footer}
