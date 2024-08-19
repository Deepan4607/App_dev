import React from 'react'
import './footer.css'
import faceicon from '../../assets/assets/facebook_icon.png'
import youicon from '../../assets/assets/youtube_icon.png'
import twiicon from '../../assets/assets/twitter_icon.png'
import instaicon from '../../assets/assets/instagram_icon.png'

const footer = () => {
  return (
    <div className='footer'>
        <div className='footer-icon'>
            <img src={faceicon} alt='' />
            <img src={instaicon} alt='' />
            <img src={twiicon} alt='' />
            <img src={youicon} alt='' />
        </div>
        <ul>
            <li>About</li>
            <li>Terms of use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Media center</li>
            <li>Jobs</li>
            <li>Contact Us</li>
        </ul>
        <p className='copyright'>© 2024 Gemine,Inc.</p>
    </div>
  )
}

export default footer