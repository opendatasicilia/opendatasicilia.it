import React from 'react'
import Layout from '../components/Layout'

export default function Login(){
    const title = "Login"
    return(
        <Layout title={title}>
            <div className="container">
                <h1>{title}</h1>
            </div>
        </Layout>
    )
}