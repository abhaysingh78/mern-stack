import React from "react";
// import playStore from "../../../../images/playstore.png";
// import appStore from "../../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='leftFooter'>
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img
          src='http://assets.stickpng.com/images/5a902dbf7f96951c82922875.png'
          alt='playstore'
        />
        <img
          className='appstore'
          src='http://assets.stickpng.com/thumbs/5a902db97f96951c82922874.png'
          alt='Appstore'
        />
      </div>

      <div className='midFooter'>
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; AP DevelopMent</p>
      </div>

      <div className='rightFooter'>
        <h4>Follow Us</h4>
        <i className='icons bx bxl-facebook-circle'></i>
        <i className='icons bx bxl-instagram-alt'></i>
        <i className='icons bx bxl-twitter'></i>
      </div>
    </footer>
  );
};

export default Footer;
