import { graphql } from "gatsby";

const GET_POSTS = graphql`
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
        slug
      }
    }
    comments {
      nodes {
        content
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
    tags {
      nodes {
        name
        slug
      }
    }
  }
`;

export { GET_POSTS };
