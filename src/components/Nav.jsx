import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/contact">
                Contact
                </Link>
                <Link style={navStyle} to="/home">
                Home
                </Link>

                <Link style={navStyle} to="/about">
                about
                </Link>

                <Link style={navStyle} to="/">
                users
                </Link>

                <Link style={navStyle} to="/posts">
                posts
                </Link>

                <Link style={navStyle} to="/albums">
                albums
                </Link>

             
            </ul>
        </nav>
    )
}
