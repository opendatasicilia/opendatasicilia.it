import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Squash as Hamburger } from 'hamburger-react'
import { RiSearchLine, RiCloseFill } from 'react-icons/ri'
import Logo from "../assets/images/opendatasicilia-logo.svg"
import Search from './Search'

export default function Header(){
    const [isOpen, setOpen] = useState(false)
    const [search, setSearch] = useState(false)
    const SearchIcon = search ? RiCloseFill : RiSearchLine;
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
            name: 'Progetti',
            url: '/progetti'
        }
    ]

    return(
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                        <img className="p-1" src={Logo} alt="opendatasicilia"/>
                    </Link>
                    <div className="navbar-nav">
                        <div className={`search-bar ${search ? 'd-block' : 'd-none'}`}>
                            <Search isSearching={search}/>
                        </div>
                        <div className={search ? 'd-none' : 'd-block'}>
                            {
                                menu.map((item, i) => (
                                    <Link to={item.url} key={i}>
                                        <a className="menu-item m-3 text-black h5 fw-light">
                                            {item.name}
                                        </a>
                                    </Link>
                                ))
                            }
                        </div>
                        <div role="button" style={{zIndex:'2'}} className="menu-item align-self-center" >
                            <SearchIcon className="search-icon" size={24} onClick={() => setSearch(!search)}/>
                        </div>
                        <Hamburger size={42} toggled={isOpen} color={isOpen ? 'white' : '#3F3D56'} toggle={setOpen} />
                    </div>
                    {
                        isOpen &&
                        <div className="mobile-menu">
                            <div className="menu-items">
                                {menu.map((item, i) => (
                                    <Link to={item.url} key={i}>
                                        <h1 className="text-white text-center h1">
                                            {item.name}
                                        </h1>
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