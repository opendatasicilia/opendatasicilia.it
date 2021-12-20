import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children, title}){
    return(
        <>
            <Helmet>
                <title>{title ? title + " | Open Data Sicilia" : "Open Data Sicilia"}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
            </Helmet>
            <Header/>
            <main className="mt-4">
                {children}
            </main>
            <Footer/>
        </>
    )
}