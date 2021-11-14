import React from 'react'
import Link from "next/link"
import style from './Navbar.module.scss'

const Navbar: React.FC = () => {
    return (
        <nav className={style.Navbar}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/curriculum">Curriculum</Link></li>
                <li><Link href="/blog">Blog</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar