import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Squash as Hamburger } from 'hamburger-react'
import { RiSearchLine } from 'react-icons/ri'
import Logo from "../assets/images/opendatasicilia-logo.svg"
import Search from './Search'

export default function Header(){
    const [isOpen, setOpen] = useState(false)
    const [search, setSearch] = useState(false)
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
                            search ? 
                                <div className="searchbar" style={{marginRight:'-36px', border:'none', width:'500px'}}>
                                    <Search/>
                                </div>
                            :
                            menu.map((item, i) => (
                                <Link to={item.url} key={i}>
                                    <span className="menu-item m-3 text-black h5 fw-light">{item.name}</span>
                                </Link>
                            ))
                        }
                        <div style={{zIndex:'1',cursor:'pointer'}} className="menu-item align-self-center" >
                            <RiSearchLine size={24} color={'lightgray'} onClick={() => setSearch(!search)}/>
                        </div>
                        <Hamburger size={42} toggled={isOpen} color={isOpen ? 'white' : '#3F3D56'} toggle={setOpen} />
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