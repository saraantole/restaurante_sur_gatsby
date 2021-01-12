import React from 'react'
import './hero.style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import chuleton from '../../images/chuleton.png'
import { FormattedMessage, Link } from "gatsby-plugin-intl"

const Hero = () => {
    return (
        <div className='hero'>
            <h1><FormattedMessage id="IndexPage.hero.headTitle" />
                <span><FormattedMessage id="IndexPage.hero.headSpan" /></span></h1>
            <h2><FormattedMessage id="IndexPage.hero.sub" /></h2>
            <div className="hero-btn">
                <button><Link to="/carta">
                    <FormattedMessage id="IndexPage.hero.seeMenu" />
                </Link></button>
                <button><a href="tel:0034952792876">
                    <FontAwesomeIcon icon={faPhoneAlt} className='icon' />
                    <FormattedMessage id="nav.reserva" />
                </a></button>
            </div>
            <img src={chuleton} alt="carne" className='carne' />
        </div>
    )
}

export default Hero


