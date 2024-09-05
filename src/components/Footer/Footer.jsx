import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt='' />
          <p>
            We craft exquisite biriyanis and sides, meticulously prepared to
            tantalise your taste buds. As a cloud kitchen, we exclusively
            partner with Swiggy and Zomato, ensuring seamless delivery of our
            culinary treasures straight to your home.{" "}
          </p>
          <div className='footer-social-icons'>
            {/* <img src={assets.facebook_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' /> */}
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            {/* <li>Home</li> */}
            <li>About us</li>
            <li>Menu</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>9044340704</li>
            <li>hi@riceofpersia.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright 2024 © Riceofpersia.com - All Right Reserved. 
      </p>
    </div>
  );
}

export default Footer
