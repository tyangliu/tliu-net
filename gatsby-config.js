module.exports = {
  siteMetadata: {
    title: `Thomas Liu`,
    description: `Homepage of Thomas Liu.`,
    author: `@tliu`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        svgo: true,
        svgoConfig: {
          plugins: [
            {prefixIds: false},
            {cleanupIDs: false},
          ],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tliu-net`,
        short_name: `tliu-net`,
        start_url: `/`,
        background_color: `#007ecc`,
        theme_color: `#007ecc`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
