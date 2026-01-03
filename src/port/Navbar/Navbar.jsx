import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <div className='nav'>
            <div className='nav-container'>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMenu}>
                    <h4>ROGBA GRAPHIX</h4>
                </Link>

                <button
                    className={`hamburger ${isOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/about" onClick={closeMenu}>ABOUT</Link>
                    <Link to="/portfolio" onClick={closeMenu}>PORTFOLIO</Link>
                    <Link to="/skills" onClick={closeMenu}>SKILLS</Link>
                    <Link to="/contact" onClick={closeMenu}>CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar