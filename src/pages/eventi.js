import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Blog from '../components/Blog'

export default function Eventi({data}){
    const title = "Eventi"
    const posts = data.allWpPost.nodes
    return(
      <>
        <Layout title={title}>
            <div className="container">
                <h1 className="fw-bold">
                  {title}
                </h1>
                <Blog data={posts} />
            </div>
        </Layout>
      </>
    )
}

export const query = graphql`
  query {
    allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "eventi"}}}}}) {
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