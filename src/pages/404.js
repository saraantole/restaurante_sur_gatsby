import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './404.style.css'
import plato from '../images/plato.jpg'
import { BreakpointProvider } from 'react-socks'
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"
import { motion, AnimatePresence } from "framer-motion"

const NotFoundPage = ({ intl }) => (
  <AnimatePresence>
  <BreakpointProvider>
    <Layout>
      <SEO lang={intl.locale}
        title={intl.formatMessage({ id: "ErrorPage.ErrorTitle" })} />
      <motion.section initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className='four-o-four container'>
          <h1><FormattedMessage id="ErrorPage.ErrorTitle" /></h1>
          <img src={plato} alt='Error' />
          <p><FormattedMessage id="ErrorPage.pError" /></p>
          <Link to='/'><button aria-label='Return'><FormattedMessage id="ErrorPage.btn" /></button></Link>
        </div>
      </motion.section>
    </Layout>
  </BreakpointProvider>
  </AnimatePresence>
)

export default injectIntl(NotFoundPage)
