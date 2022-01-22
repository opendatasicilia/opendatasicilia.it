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
        url: process.env.GATSBY_WP_GRAPH_API,
        schema: {
          perPage: 20, // default is 100
          requestConcurrency: 5, // default is 15
          previewRequestConcurrency: 2, // default is 5
        },
        html: {
          useGatsbyImage: false
        }
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
                uri
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
        store: ['slug', 'uri', 'title', 'content', 'author'],
        normalizer: ({ data }) =>
          data.allWpPost.nodes.map((node) => ({
            slug: node.slug,
            title: node.title,
            uri: node.uri,
            content: node.content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/<[^>]+>/g, ''),
            author: node.author.node.name
          })),
      },
    },
  ],
};
  