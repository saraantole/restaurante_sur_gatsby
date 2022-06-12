module.exports = {
  siteMetadata: {
    title: `Restaurante Sur`,
    description: `Asador Argentino en Estepona, Malaga`,
    author: `Sara Antole`,
    siteUrl: `https://restaurantesurestepona.com`,
    keywords: [
      'restaurante argentino',
      'restaurantes estepona',
      'restaurante sur estepona',
      'asador argentino estepona',
      'argentinian restaurant',
      'estepona restaurants',
      'restaurant estepona',
      'sur',
      'restaurante sur carta'
    ]
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oswald\:400,500`,
          `Julee`
        ],
        display: 'swap'
      }
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
        icon: `src/images/favicon-16x16.png`,
        icons: [
          {
            src: "src/images/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "src/images/logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "src/images/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "src/images/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "src/images/safari-pinned-tab.svg",
            sizes: "285x285",
            type: "image/svg",
            purpose: "any maskable"
          },
          {
            src: "src/images/mstile-150x150.png",
            sizes: "270x270",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "src/images/favicon.ico",
            sizes: "48x48",
            type: "image/ico",
            purpose: "any"
          }
        ]
      },
    },
    `gatsby-plugin-offline`
  ],
}
