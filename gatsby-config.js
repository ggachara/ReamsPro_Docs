module.exports = {
  siteMetadata: {
    siteTitle: `ReamsPro Docs`,
    defaultTitle: `ReamsPro Docs`,
    siteTitleShort: `ReamsPro Docs`,
    siteDescription: `Documentation for ReamsPro users, a real estate management system`,
    siteUrl: `https://rocketdocs.netlify.app`,
    siteAuthor: `@bazuu`,
    siteImage: `/favicon.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/reamspro/documentation`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://documentation.reamspro.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
