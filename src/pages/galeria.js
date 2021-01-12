import React from "react"
import { BreakpointProvider } from 'react-socks'
import GalleryComponent from '../components/galeria/galeria.component'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { injectIntl } from "gatsby-plugin-intl"

const Galeria = ({intl}) => {
  return (
    <BreakpointProvider>
      <Layout>
      <SEO lang={intl.locale}
      title={intl.formatMessage({ id: "nav.gallery" })} />
        <GalleryComponent/>
      </Layout>
    </BreakpointProvider>
  )
}

export default injectIntl(Galeria)

