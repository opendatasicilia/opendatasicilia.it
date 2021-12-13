import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Squash as Hamburger } from 'hamburger-react'
import Logo from "../assets/images/opendatasicilia-logo.png"

export default function Header(){
    const [isOpen, setOpen] = useState(false)
    const menu = [
        {
            name: 'Blog',
            url: '/blog'
        },
        {
            name: 'Chi siamo',
            url: '/chi-siamo'
        },
        {
            name: 'Eventi',
            url: '/eventi'
        },
        {
            name: 'Cose nostre',
            url: '/cose-nostre'
        },
        {
            name: 'Login',
            url: '/login'
        }
    ]

    return(
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                        <img className="p-1" style={{width:'60px'}} src={Logo} alt="opendatasicilia"/>
                    </Link>
                    <div className="navbar-nav">
                    {
                        menu.map((item, i) => (
                            <Link to={item.url} key={i}>
                                <span className="menu-item m-3 text-black h5">{item.name}</span>
                            </Link>
                        ))
                    }
                    <Hamburger size={42} toggled={isOpen} color={isOpen ? 'white' : 'black'} toggle={setOpen} />
                    </div>
                    {
                        isOpen &&
                        <div className="mobile-menu">
                            <div className="menu-items">
                                {menu.map((item, i) => (
                                    <Link to={item.url} key={i}>
                                        <h1 className="text-white text-center h1">{item.name}</h1>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </nav>
        </header>
    )
}