import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './404.style.css'
import plato from '../images/plato.jpg'
import { BreakpointProvider } from 'react-socks'
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"


const NotFoundPage = ({ intl }) => (
  <BreakpointProvider>
    <Layout>
      <SEO lang={intl.locale}
        title={intl.formatMessage({ id: "404Page.404Title" })} />
      <div className='four-o-four container'>
        <h1><FormattedMessage id="404Page.404Title" /></h1>
        <img src={plato} alt='404' />
        <p><FormattedMessage id="404Page.p404" /></p>
        <Link to='/'><button><FormattedMessage id="404Page.btn" /></button></Link>
      </div>
    </Layout>
  </BreakpointProvider>
)

export default injectIntl(NotFoundPage)
