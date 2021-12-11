import React from 'react'
import Layout from '../components/Layout'
import socials from '../data/socials'
import lorem from "../data/lorem"

export default function ChiSiamo(){
    const title = "Chi Siamo"
    return(
        <Layout title={title}>
            <div className="container">
                <h1>{title}</h1>
                <p className="subtitle">
                    Siamo un gruppo di cittadini con diverse storie, competenze, professioni. Siamo accomunati dalla genuina volontà di contribuire a migliorare la qualità della vita della nostra comunità. Lo vogliamo fare con spirito di collaborazione e concretezza.
                </p>
            </div>
            <div className="container mt-5 mb-5">
                <h1>Dove trovarci</h1>
                
                <div className="row">
                    {
                        socials.map((social, i) => (
                            <div className="col-12 col-lg-6 mb-3" key={i}>
                                <div className="p-4 card rounded-4">
                                    <div className="row">
                                        <div className="col-2 col-xl-1">
                                            <social.icon size={36} color={'teal'}/>
                                        </div>
                                        <div className="col-10 col-xl-11">
                                            <h3>{social.name}</h3>
                                            <p>{lorem}</p>
                                            <div className="text-end">
                                                <a href={social.url} target="_blank" rel="noreferrer">
                                                    Entra→
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            
            </div>
        </Layout>
    )
}