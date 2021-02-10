import React from "react"

import "./header.style.css"
import Topbar from '../header/topbar/topbar'
import DesktopNavBar from './desktop-nav/desktop-nav'
import MobileNavBar from './mobile-nav/mobile-nav'
import { Breakpoint } from 'react-socks'


const Header = ({ offset }) => {

  return (
    <div>
      <header >

        <Breakpoint large up>
          <Topbar />
          <DesktopNavBar offset={offset} />
        </Breakpoint>

        <Breakpoint medium down>
          <MobileNavBar />
        </Breakpoint>

      </header>

    </div>
  )
}

export default Header
