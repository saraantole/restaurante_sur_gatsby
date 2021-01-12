import React from "react"

import "./header.style.css"
import Topbar from '../header/topbar/topbar'
import DesktopNavBar from './desktop-nav/desktop-nav'
import MobileNavBar from './mobile-nav/mobile-nav'
import { injectIntl } from "gatsby-plugin-intl"
import { Breakpoint } from 'react-socks'

const Header = ({intl}) => {
  return (
    <header >

      <Breakpoint large up>
        <Topbar />
        <DesktopNavBar />
      </Breakpoint>

      <Breakpoint medium down>
        <MobileNavBar />
      </Breakpoint>

    </header>
  )
}

export default injectIntl(Header)
