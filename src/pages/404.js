import React from "react"
import Layout from "../components/Layout"
import Search from "../components/Search"
import { graphql } from "gatsby"
import image404 from "../assets/images/404.svg"

export default function NotFound({data}){

  return(
      <Layout title="404">
      <div className="container">
        <div className="row mb-1">
          <div className="col-12 col-lg-6 align-self-center text-center text-lg-start order-2 order-lg-1">
            <h1>
              Pagina non trovata
            </h1>
            <h2 className="fw-light">
              Siamo spiacenti, questa pagina non è stata trovata o non esiste. Vuoi provare a cercarla?
            </h2>
            <Search data={data}/>
          </div>
          <div className="col-12 col-lg-6 text-center order-1 order-lg-2">
            <img src={image404} className="notfound" alt="404" />
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
        content
      }
    }
  }
`