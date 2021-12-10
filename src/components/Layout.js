import React from 'react'
import { Helmet } from 'react-helmet'
import "../styles/main.css"
import Header from './Header'
import Footer from './Footer'

export default function Layout({children, title}){
    return(
        <>
            <Helmet>
                <title>{title ? title + " | OpenDataSicilia" : "OpenDataSicilia"}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap" rel="stylesheet" />
            </Helmet>
            <Header/>
            <main className="mt-5">
                {children}
            </main>
            <Footer/>
        </>
    )
}