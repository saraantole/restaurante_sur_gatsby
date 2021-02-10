/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 * 
 *Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
//import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import Header from "./header/header"
import Footer from "./footer/footer"
import "./layout.css"
import ToTopBtn from "./toTopBtn/toTopBtn"
import Loader from '../components/loader/loader'
import background from '../images/peter-gargiulo-cGNCepznaV8-unsplash.jpg'

const Layout = ({ children, intl }) => {
  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
            description
            author
            keywords
            siteUrl
        }
      }
    }
  `)

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
    }
    return
  }, [offset])

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
      sessionStorage.setItem('alreadyLoadedOnce', true)
    }, 600)


    if (sessionStorage.getItem('alreadyLoadedOnce')) {
      setLoading(false)
    }

    window.onunload = () => sessionStorage.removeItem('alreadyLoadedOnce')

    return
  }, [isLoading])

  return (
    isLoading ?
      <Loader />
      :
      <div>
        <div style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          top: '0', right: '0',
          zIndex: '-1000',
          backgroundImage: `url(${background})`
        }} />
        <Header siteTitle={intl.formatMessage({ id: "title" })} offset={offset} />
        <main >{children}</main>
        <ToTopBtn offset={offset} />
        <Footer />
      </div>
  )
}

export default injectIntl(Layout)
