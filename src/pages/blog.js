import React from 'react';
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Blog from '../components/Blog'

export default function BlogPage({data}){
    const posts = data.allWpPost.nodes
    return(
      <>
        <Layout title="Blog">
          <div className="container">
            <h1 className="fw-bold">
              Tutti i post
            </h1>
            <Blog data={posts} />
          </div>
        </Layout>
      </>
    )
}

export const query = graphql`
  query {
    allWpPost {
      nodes {
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
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 400,
                  placeholder: DOMINANT_COLOR,
                  formats: AUTO
                )
              }
            }
          }
        }
      }
    }
  }
`