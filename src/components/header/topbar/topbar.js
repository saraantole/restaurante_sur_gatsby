import React from 'react'
import LanguageSwitch from '../../language-switch/language-switch'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './topbar.style.css'
import { FormattedMessage } from "gatsby-plugin-intl"


const Topbar = () => {
    return (
        <div className='top-bar container'>
            <div className='info'>
                <FontAwesomeIcon icon={faPhoneAlt} className='icon' /><span>
                    <FormattedMessage id="tel" />
                </span>
                <FontAwesomeIcon icon={faClock} className='icon' /><span>
                    <FormattedMessage id="time" />
                </span>
                <a href='https://www.google.com/maps/place/Restaurante+Sur/@36.4271314,-5.1409657,19z/data=!4m5!3m4!1s0x0:0xff050e78367839d2!8m2!3d36.4271249!4d-5.1406036' target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' /><span>
                        <FormattedMessage id="location" />
                    </span>
                </a>
            </div>
            <LanguageSwitch/>
        </div>
    )
}

export default Topbar