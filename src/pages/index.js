import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Blog from "../components/Blog"
import IntroSVG from "../assets/images/intro.svg"

import lorem from "../data/lorem"
import cards from "../data/cards"

export default function Index({data}){

  const posts = data.allWpPost.nodes
  
  return(
    <Layout>
      <div className="wrapperGrad pt-5 pb-5">
        <div className="container">
          
          <div className="row">
            <div className="col-12 col-lg-6 align-self-center mb-5 mb-lg-0 text-center text-lg-start">
              <h1 className="mx-auto mx-lg-0 text-uppercase logotype pb-3 fw-bold">
                Open Data Sicilia
              </h1>
              <p className="pb-3 fw-light">{lorem}</p>
              <Link to='/chi-siamo'>
                <button className="primary me-4 rounded-4">
                  Unisciti
                </button>
              </Link>
              <button className="secondary rounded-4">
                Scopri di piu
              </button>
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
                    <img className="mx-auto m-5 mh-100" src={card.image} alt={card.title}/>
                    <h1 style={{fontSize:'27px', color:'#3F3D56'}} className="text-uppercase mb-3 fw-bold">
                      {card.title}
                    </h1>
                    <p style={{fontSize:'18px'}}>
                      {lorem.substring(0,116)}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        
        </div>
      </div>
      <div className="container pt-5">
        <h1 style={{fontSize:'41px'}}>
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