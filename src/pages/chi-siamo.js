import React from 'react'
import Layout from '../components/Layout'

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
        </Layout>
    )
}