import React from 'react'
import logo from '../../../images/logo.png'
import './desktop-nav.style.css'
import { FormattedMessage, Link } from "gatsby-plugin-intl"


const DesktopNavBar = () => {
    return (
            <nav className={`desktop-navbar ${window.pageYOffset >= 500 ? 'sticky' : null}`}>

                <Link to="/" className="navbar-logo container">
                    <img src={logo} alt='logo' />
                </Link>

                <ul className="desktop-nav container">
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
                </ul>

            </nav>
    )
}

export default DesktopNavBar