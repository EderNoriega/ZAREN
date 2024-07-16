import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
             <img src={assets.logo} alt="" />
             <p>Zaren ha surgido para cubrir las tendencias de la moda desde su creación.</p>
             <div className="footer-social-icons">
                <img src= {assets.facebook_icon} alt="" />
                <img src= {assets.twitter_icon} alt="" />
                <img src= {assets.linkedin_icon} alt="" />
             </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>Acerca de nosotros</li>
                    <li>Entrega</li>
                    <li>Política de privacidad</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Póngase en contacto</h2>
                <ul>
                    <li>+52-56 2732 8086</li>
                    <li>zaren.boutique@outlook.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Zaren.com - All right Reserved.</p>
    </div>
  )
}

export default Footer