import React from "react"
import { BreakpointProvider } from 'react-socks'
import Layout from "../components/layout"
import SEO from "../components/seo"
import CartaContainer from '../components/carta/carta.component'
import { injectIntl } from "gatsby-plugin-intl"

const Carta = ({intl}) => (
  <BreakpointProvider>
    <Layout>
    <SEO lang={intl.locale}
    title={intl.formatMessage({ id: "nav.menu" })} />
      <CartaContainer />
    </Layout>
  </BreakpointProvider>
)

export default injectIntl(Carta)