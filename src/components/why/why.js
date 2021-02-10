import React, { useEffect } from 'react'
import './why.style.css'
import dryAger from '../../images/dry-ager.png'
import tripAdvisor from '../../images/TripAdvisor-Certificate-of-Excelence-2019_logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvira } from '@fortawesome/free-brands-svg-icons'
import { FormattedMessage } from "gatsby-plugin-intl"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Why = () => {
    
    useEffect(() => {
        AOS.init({
            once: true
        })
        if (AOS) {
            AOS.refresh()
        }
        return
    }, [])

    return (
        <div className='container'>
            <h3><FormattedMessage id="IndexPage.why.whyTitle" /></h3>
            <div className='why'>

                <div data-aos="fade-up" className='card'>
                    <FontAwesomeIcon icon={faEnvira} className='leaf why-icon' />
                    <p><FormattedMessage id="IndexPage.why.1" /></p>
                </div>

                <div data-aos="fade-up" className='card'>
                    <img src={dryAger} alt='Dry ager' className='why-icon' />
                    <p><FormattedMessage id="IndexPage.why.2" /></p>
                </div>

                <div data-aos="fade-up" className='card'>
                    <img src={tripAdvisor} alt='TripAdvisor' className='why-icon' />
                    <p><FormattedMessage id="IndexPage.why.3" /></p>
                </div>

            </div>
        </div>
    )
}

export default Why

