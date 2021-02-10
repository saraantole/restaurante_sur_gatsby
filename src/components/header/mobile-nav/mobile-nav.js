import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../../../images/logo.png'
import './mobile-nav.style.css'
import HamburgerIcon from '../hamburger-icon/hamburger'
import Dropdown from '../dropdown/dropdown'


const MobileNavBar = () => {
    const [dropdownHidden, toggleDropdown] = useState(true);

    return (

        <div>
            <nav className='mobile-navbar'>

                <Link to="/" className="navbar-mob-logo container">
                    <img src={logo} alt='logo' />
                </Link>

                <HamburgerIcon toggleDropdown={toggleDropdown} dropdownHidden={dropdownHidden} />

                <Dropdown dropdownHidden={dropdownHidden} />

            </nav>

        </div>
    )
}

export default MobileNavBar