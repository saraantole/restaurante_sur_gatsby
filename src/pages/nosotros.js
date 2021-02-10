import React from "react"
import { BreakpointProvider } from 'react-socks'
import Layout from "../components/layout"
import SEO from "../components/seo"
import nosotros from '../images/nosotros.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import './nosotros.style.css'
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import { motion, AnimatePresence } from "framer-motion"

const Nosotros = ({ intl }) => (
  <AnimatePresence>
    <BreakpointProvider>
      <Layout>
        <SEO lang={intl.locale}
          title={intl.formatMessage({ id: "nav.about" })} />
        <motion.section initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className='nosotros-container'>
            <h1 style={{ textAlign: 'center' }}>
              <FormattedMessage id="AboutPage.aboutTitle" />
            </h1>
            <div className='nosotros container'>
              <img src={nosotros} alt='proprietarios restaurante sur' />
              <div className='historia'>
                <p><FontAwesomeIcon icon={faQuoteLeft} />
                  <FormattedMessage id="AboutPage.story" />
                  <FontAwesomeIcon icon={faQuoteRight} /></p>
              </div>
            </div>
          </div>
        </motion.section>
      </Layout>
    </BreakpointProvider>
  </AnimatePresence>
)


export default injectIntl(Nosotros)
