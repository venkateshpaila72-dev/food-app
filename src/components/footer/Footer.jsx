import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer'id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""/>
                <p>© 2024 Foodie. All rights reserved.Tomato is your go-to online food delivery platform bringing delicious meals straight from your favorite restaurants to your doorstep. From quick bites to full-course meals, we make sure every order is fresh, fast, and full of flavor. </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="facebook" />
                    <img src={assets.twitter_icon} alt="twitter" />
                    <img src={assets.linkedin_icon} alt="linkedin" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul> 
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>

             <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-964-090-9635</li>
                    <li>totmaotfoodie@gmail.com</li>
                </ul>
            </div>


        </div>
        <hr/>
        <p className='footer-copyrigth'>
            Copyrigth 2025 © Tomato.com - All Right reserved.
        </p>
      
    </div>
  )
}

export default Footer
