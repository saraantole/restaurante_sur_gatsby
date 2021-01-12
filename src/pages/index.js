import React from "react"
import { BreakpointProvider } from 'react-socks'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero";
import Why from "../components/why/why";
import Reviews from "../components/reviews/reviews";
import Contact from "../components/contacto/contacto";
import { injectIntl } from "gatsby-plugin-intl"

const IndexPage = ({ intl }) => (
  <BreakpointProvider>
    <Layout>
      <SEO lang={intl.locale}
        title={intl.formatMessage({ id: "nav.home" })} />
      <Hero />
      <Why />
      <Reviews />
      <Contact />
    </Layout>
  </BreakpointProvider>
)

export default injectIntl(IndexPage)
