import React from 'react'
import './hamburger.style.css'


const HamburgerIcon = ({dropdownHidden, toggleDropdown}) => {
    return (
        <div className={`hamburger-icon ${dropdownHidden ? null : 'change'}`}
        onClick={() => toggleDropdown(!dropdownHidden)}  onKeyDown={() => toggleDropdown(!dropdownHidden)}>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
    </div>
    )
}

export default HamburgerIcon