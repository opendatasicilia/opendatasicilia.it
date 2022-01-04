import { graphql } from 'gatsby'

export const Post = graphql`
  fragment Post on WpPost {
      title
      slug
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