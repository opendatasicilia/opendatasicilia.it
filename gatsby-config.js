require("dotenv").config({path: `.env.${process.env.NODE_ENV}`})
  
module.exports = {
  pathPrefix: '/opendatasicilia.it',
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WP_GRAPH_API,
      },
      type: {
        MediaItem: {
          localFile: {
            requestConcurrency: 50
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OpenDataSicilia`,
        short_name: `ODS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#006d77`,
        display: `standalone`,
        icon: `src/assets/images/opendatasicilia-logo.png`,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
};
  