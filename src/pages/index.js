import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Blog from "../components/Blog"
import Logo2 from "../assets/images/opendatasicilia-logo2.png"
import IntroSVG from "../assets/images/intro.svg"

export default function Index({data}){

  const posts = data.allWpPost.nodes
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales tincidunt risus vel tempus. Nunc lobortis faucibus enim in iaculis. Nulla urna metus, gravida faucibus varius eu, imperdiet et leo. Proin finibus, lectus convallis consequat posuere, quam ex rhoncus lectus, consequat hendrerit odio velit nec purus."
  const cards = ['Unisciti', 'Collabora', 'Pubblica']
  
  return(
    <Layout>
      <div className="wrapperGrad pt-5 pb-5">
        <div className="container">
          
          <div className="row">
            <div className="col-12 col-lg-6 align-self-center mb-5 mb-lg-0 text-center text-lg-start">
              <img className="mb-3" style={{height:'300px'}}src={Logo2} alt="logo"/>
              <p>{lorem}</p>
              <button className="primary me-4">Unisciti</button>
              <button className="secondary">Scopri di piu</button>
            </div>
            <div className="col-12 col-lg-6">
              <img src={IntroSVG} alt="Intro" /> 
            </div>
          </div>
          
          <div className="row pt-5 mt-5">
            {
              cards.map((card, i) => (
                <div className="col-12 col-lg-4 mb-3" key={i}>
                  <div className="text-center p-4 card">
                    <h1 className="text-muted" style={{fontSize:'128px'}}>?</h1>
                    <h1>{card}</h1>
                    <p>{lorem}</p>
                  </div>
                </div>
              ))
            }
          </div>
        
        </div>
      </div>
      <div className="container pt-5">
        <h1 style={{fontSize:'64px'}}>
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