import { FaTwitter, FaRedditAlien, FaDiscord, FaYoutube, FaBorderNone } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from 'react'
import './footer.css'
const Footer = () => {
  return (

    <div className="footer-container">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Watch Anime</h4>
          <ul>
            <li>
              <Link to={'/aboutus'}>About Us</Link>
            </li>
            <li>
              <Link to={'/partners'}>Our Partners</Link>
            </li>
            <li>
              <Link to={'/partnership'}>Partnership</Link>
            </li>
            <li>
              <Link to={'/privacy'}>Privacy</Link>
            </li>
          </ul>
        </div>
        <div className='footer-col'>
          <h4>Site Navigation</h4>
          <ul>
            <li>
              <Link to={'/aboutus'}><span style={{ textDecoration: 'none' }}>F.A.Q</span></Link>
            </li>
            <li>
              <Link to={'/partners'}>Help Us</Link>
            </li>
            <li>
              <Link to={'/partnership'}>Send Mail</Link>
            </li>
          </ul>
        </div>
        <div className='footer-col'>
          <h4 >Social Media</h4>
          <div className="social-media">
            <a href='https://twitter.com' target='_blank'><FaTwitter className='social-icons' /></a>
            <a href='https://reddit.com' target='_blank'><FaRedditAlien className='social-icons' /></a>
            <a href='https://discord.com' target='_blank'><FaDiscord className='social-icons' /></a>
            <a href='https://youtube.com' target='_blank'><FaYoutube className='social-icons' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;