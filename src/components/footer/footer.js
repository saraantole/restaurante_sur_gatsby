import React from "react"
import "./footer.style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <footer>
                <a href="https://www.facebook.com/SurRestaurante/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className='footer-social' />
                </a>
                <a href="https://www.instagram.com/restaurante_sur/?hl=es" target="_blank"
                    rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className='footer-social' />
                </a> <br />
                <p>
                    © {new Date().getFullYear()}. All rights reserved. <br />
                    {/*  <span style={{ fontSize: '10px' }}>Built with &#x2764; by {` `}
                        <a href="https://saraantole.netlify.app/" target='_blank' rel="noreferrer" style={{ textDecoration: 'underline' }}>Sara Antole</a></span> */}
                </p>
            </footer>
        </div>
    )
}

export default Footer