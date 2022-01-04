require("dotenv").config({path: `.env.${process.env.NODE_ENV}`})
  
module.exports = {
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.GATSBY_WP_GRAPH_API
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
    "gatsby-plugin-no-sourcemaps",
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'posts',
        engine: 'flexsearch',
        engineOptions: { 
          tokenize: 'forward' 
        },
        query: `
          {
            allWpPost{
              nodes {
                slug
                title
                content
                author {
                  node {
                    name
                  }
                }
              }
            }
          }
        `,
        ref: 'slug',
        index: ['title', 'author', 'content'],
        store: ['slug', 'title', 'content', 'author'],
        normalizer: ({ data }) =>
          data.allWpPost.nodes.map((node) => ({
            slug: node.slug,
            title: node.title,
            content: node.content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/<[^>]+>/g, ''),
            author: node.author.node.name
          })),
      },
    },
  ],
};
  