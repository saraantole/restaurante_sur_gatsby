import React from "react"
import { BreakpointProvider } from 'react-socks'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero";
import Why from "../components/why/why";
import Reviews from "../components/reviews/reviews";
import Contact from "../components/contacto/contacto";
import { injectIntl } from "gatsby-plugin-intl"
import { motion, AnimatePresence } from "framer-motion"


const IndexPage = ({ intl }) => {
  return (
    <AnimatePresence>
      <BreakpointProvider>
        <Layout>
          <SEO lang={intl.lang}
            title={intl.formatMessage({ id: "nav.home" })} />
            <motion.section initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero />
            <Why />
            <Reviews />
            <Contact />
          </motion.section>
        </Layout>
      </BreakpointProvider>
    </AnimatePresence>
  )
}

export default injectIntl(IndexPage)
