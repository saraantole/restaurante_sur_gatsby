import React from "react"
import { BreakpointProvider } from 'react-socks'
import GalleryComponent from '../components/galeria/galeria.component'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useIntl } from "gatsby-plugin-intl"
import { motion, AnimatePresence } from "framer-motion"

const Galeria = () => {
  const intl = useIntl()
  return (
    <AnimatePresence>
      <BreakpointProvider>
        <Layout>
          <SEO lang={intl.locale}
            title={intl.formatMessage({ id: "nav.gallery" })} />
          <motion.section initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <GalleryComponent />
          </motion.section>
        </Layout>
      </BreakpointProvider>
    </AnimatePresence>
  )
}

export default Galeria

