import React from "react"
import Layout from "../components/Layout"
import Search from "../components/Search"
import { graphql } from "gatsby"

export default function NotFound({data}){

  return(
      <Layout title="404">
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 align-self-center">
            <h1>
              Pagina non trovata
            </h1>
            <h2 className="fw-light">
              Siamo spiacenti, questa pagina non è stata trovata o non esiste. Vuoi provare a cercarla?
            </h2>
            <Search data={data}/>
          </div>
          <div className="col-12 col-lg-6">
            <h1 style={{color:'#00A47F', fontSize:'281px', textShadow:'6px 0px 0px #00000029', fontWeight:'900'}}>
              404
            </h1>
          </div>
        </div>
      </div>
      </Layout>
  )
}

export const query = graphql`
  query {
    allWpPost {
      nodes {
        title
        slug
      }
    }
  }
`