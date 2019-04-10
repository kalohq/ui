const uiPackage = require('../package.json');
const uiVersion = uiPackage.version;

module.exports = {
  siteMetadata: {
    title: 'Kalo UI Kit',
    version: uiVersion,
    buildPreviewPullRequestId: process.env.REVIEW_ID || false, // Netlify
    buildPreviewCommitRef: process.env.COMMIT_REF || false, // Netlify
    githubRepoLink: 'https://github.com/kalohq/ui',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-transformer-react-docgen',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: '../src/components',
        name: 'componentDocumentation',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/pages',
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-63445945-7',
      },
    },
  ],
};
