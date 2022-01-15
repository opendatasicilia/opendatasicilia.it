import { graphql } from 'gatsby'

export const Post = graphql`
  fragment Post on WpPost {
      title
      slug
      uri
      excerpt
      content
      date
      author {
          node {
            name
          }
        }
      comments {
        nodes {
          content
        }
      }
  }
`