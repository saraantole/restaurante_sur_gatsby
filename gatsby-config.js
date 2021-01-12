module.exports = {
  siteMetadata: {
    title: `Restaurante Sur`,
    description: `Asador Argentino en Estepona`,
    author: `Sara Antole`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `es`],
        defaultLanguage: `es`,
        redirect: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/images/gallery`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-facebook-sdk`,
      options: {
        appId: '732989580659837',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v9.0'
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Restaurante Sur`,
        short_name: `Restaurante Sur`,
        start_url: `/`,
        background_color: `#262525`,
        theme_color: `#262525`,
        display: `minimal-ui`,
        icon: `src/images/logo-512x512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
