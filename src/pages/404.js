import React from "react"
import Layout from "../components/Layout"
import Search from "../components/Search"
import image404 from "../assets/images/404.svg"
import { RiSearchLine } from 'react-icons/ri'

export default function NotFound(){

  return(
      <Layout title="404">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-lg-6 align-self-center text-center text-lg-start order-2 order-lg-1">
            <h1 className="fw-bold">
              Pagina non trovata
            </h1>
            <div className="text-center text-lg-start">
              <p className="fw-medium mx-auto mx-lg-0" style={{maxWidth:'36ch'}}>
                Siamo spiacenti, questa pagina non è stata trovata o non esiste. Vuoi provare a cercarla?
              </p>
            </div>
            <div className="search-bar w-100 d-flex mt-4">
              <Search/>
              <div style={{backgroundColor:'teal', marginLeft:'-54px', height:'54px', width:'54px', display:'flex', zIndex:'2', borderRadius:'0px .3rem .3rem 0px'}}>
                <RiSearchLine className="align-self-center mx-auto" color={'white'} size={54/1.618}/>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 text-center order-1 order-lg-2">
            <img src={image404} className="notfound" alt="404" />
          </div>
        </div>
      </div>
      </Layout>
  )
}