import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Blog from '../components/Blog'

export default function Progetti({data}){
    const title = "Progetti"
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
    allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "cose-nostre"}}}}}) {
      nodes {
        ...Post
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