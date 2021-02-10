import React from "react"
import { BreakpointProvider } from 'react-socks'
import Layout from "../components/layout"
import SEO from "../components/seo"
import CartaContainer from '../components/carta/carta.component'
import { injectIntl } from "gatsby-plugin-intl"
import { motion, AnimatePresence } from "framer-motion"

const Carta = ({ intl }) => (
  <AnimatePresence>
    <BreakpointProvider>
      <Layout>
        <SEO lang={intl.locale}
          title={intl.formatMessage({ id: "nav.menu" })} />
        <motion.section initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <CartaContainer />
        </motion.section>
      </Layout>
    </BreakpointProvider>
  </AnimatePresence>
)

export default injectIntl(Carta)