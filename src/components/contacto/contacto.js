import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './contacto.style.css'
import { FormattedMessage } from "gatsby-plugin-intl"


const Contact = () => {
    return (
        <div>
            <div className='contact-container'>
                <h3 className='container'>
                    <FormattedMessage id="IndexPage.contact.contactTitle" />
                </h3>
                <div className='container contact'>
                    <a className='map' href='https://www.google.com/maps/place/Restaurante+Sur/@36.4271249,-5.1406036,15z/data=!4m5!3m4!1s0x0:0xff050e78367839d2!8m2!3d36.4271249!4d-5.1406036' target='_blank' rel='noreferrer'>
                        <div className='map-img'></div>
                    </a>
                    <div className='contact-info'>
                        <a href='tel:0034952792876'><FontAwesomeIcon icon={faPhoneAlt} /><span>
                            <FormattedMessage id="tel" />
                        </span></a><br />
                        <FontAwesomeIcon icon={faClock} /><span>
                            <FormattedMessage id="time" />
                        </span><br />
                        <FontAwesomeIcon icon={faMapMarkerAlt} /><span>
                            <FormattedMessage id="location" />
                        </span>
                    </div>
                </div>
            </div>

            <div className="parallax">
                <div className="parallax-overlay"></div>
                <div className="parallax-content">
                    <h2>
                        <FormattedMessage id="IndexPage.contact.greetings" />
                    </h2>
                    <button><a href="tel:0034952792876">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <FormattedMessage id="IndexPage.contact.cta" />
                    </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact