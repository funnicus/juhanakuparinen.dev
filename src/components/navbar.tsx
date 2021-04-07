import React from 'react'
import { Link } from "gatsby"
import * as navbarStyle from './navbar.module.css'

const Navbar: React.FC = () => {
    return (
        <nav className={navbarStyle.Navbar}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/skills">Top Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar