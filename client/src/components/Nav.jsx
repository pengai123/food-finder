import React, { useRef, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function Nav() {

	const navLinksRef = useRef(null)
	const menuIconRef = useRef(null)

	const toggleMenu = e => {
		document.getElementById("menu-icon").classList.toggle("menu-active")
		
		// different method with useRef
		// menuIconRef.current.classList.toggle("menu-active")
	}

	const handleClickOutside = e => {
		if (navLinksRef &&
			!navLinksRef.current.contains(e.target) &&
			!menuIconRef.current.contains(e.target) &&
			document.getElementById("menu-icon").classList.contains("menu-active")) {
			document.getElementById("menu-icon").classList.remove("menu-active")
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		}
	}, [])

	return (
		<div className="navbar">
			<Link to="/" className="navbar-logo link">
				LOGO
			</Link>
			<div id="menu-icon" className="menu-icon" onClick={toggleMenu} ref={menuIconRef}>
				<div className="line-1 menu-icon-line"></div>
				<div className="line-2 menu-icon-line"></div>
				<div className="line-3 menu-icon-line"></div>
			</div>
			<ul className="navbar-links" ref={navLinksRef}>
				<li>
					<Link to="/about" className="navbar-link link">About</Link>
				</li>
				<li>
					<Link to="/shop" className="navbar-link link">Shop</Link>
				</li>
			</ul>
		</div >
	)
}
