import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Blog from "../components/Blog"
import IntroSVG from "../assets/images/intro.svg"

import lorem from "../data/lorem"

export default function Index({data}){

  const posts = data.allWpPost.nodes
  const cards = ['Unisciti', 'Collabora', 'Pubblica']
  
  return(
    <Layout>
      <div className="wrapperGrad pt-5 pb-5">
        <div className="container">
          
          <div className="row">
            <div className="col-12 col-lg-6 align-self-center mb-5 mb-lg-0 text-center text-lg-start">
              <h1 className="mx-auto mx-lg-0 text-uppercase logotype pb-3">
                Open Data Sicilia
              </h1>
              <p className="pb-3 fw-light">{lorem}</p>
              <button className="primary me-4 rounded-4">Unisciti</button>
              <button className="secondary rounded-4">Scopri di piu</button>
            </div>
            <div className="col-12 col-lg-6">
              <img src={IntroSVG} alt="Intro" /> 
            </div>
          </div>
          
          <div className="row pt-5 mt-5">
            {
              cards.map((card, i) => (
                <div className="col-12 col-lg-4 mb-3" key={i}>
                  <div className="text-center p-4 card rounded-4">
                    <h1 className="text-muted" style={{fontSize:'128px'}}>?</h1>
                    <h1>{card}</h1>
                    <p className="fw-light">{lorem}</p>
                  </div>
                </div>
              ))
            }
          </div>
        
        </div>
      </div>
      <div className="container pt-5">
        <h1 style={{fontSize:'60px'}}>
          Ultimi post
        </h1>
        <Blog data={posts}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPost(limit: 3) {
      nodes {
        title
        slug
        excerpt
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