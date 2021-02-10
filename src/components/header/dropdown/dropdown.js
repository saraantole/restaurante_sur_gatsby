import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FormattedMessage, Link } from "gatsby-plugin-intl"
import LanguageSwitch from '../../language-switch/language-switch'

import './dropdown.style.css'

const Dropdown = ({ dropdownHidden }) => {
    return (
        <div className={`dropdown-overlay ${dropdownHidden ? 'overlay-slide-left' : 'overlay-slide-right'}`} >

            <ul className="items">
                <li><Link to="/" activeClassName='current'>
                    <FormattedMessage id="nav.home" />
                </Link></li>
                <li><Link to="/carta/" activeClassName='current'>
                    <FormattedMessage id="nav.menu" />
                </Link></li>
                <li><Link to="/nosotros/" activeClassName='current'>
                    <FormattedMessage id="nav.about" />
                </Link></li>
                <li><Link to="/galeria/" activeClassName='current'>
                    <FormattedMessage id="nav.gallery" />
                </Link></li>
                <li><a href="tel:0034952792876">
                    <FormattedMessage id="nav.reserva" />
                </a></li>
                <li><LanguageSwitch/></li>
            </ul>

            <div className="social">
                <a href="https://www.facebook.com/SurRestaurante/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.instagram.com/restaurante_sur/?hl=es" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} /></a>
            </div>

        </div>
    )
}

export default Dropdown