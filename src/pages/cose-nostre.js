import React from 'react'
import Layout from '../components/Layout'

export default function Progetti(){
    const title = "Progetti"
    return(
        <Layout title={title}>
            <div className="container">
                <h1>{title}</h1>
            </div>
        </Layout>
    )
}