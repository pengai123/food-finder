import React, { useRef, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function Nav() {

	const navLinksRef = useRef(null)
	const menuIconRef = useRef(null)

	const toggleMenu = e => {
		document.querySelector(".menu-icon").classList.toggle("active")
	}

	const handleClickOutside = e => {
		if (navLinksRef &&
			!navLinksRef.current.contains(e.target) &&
			!menuIconRef.current.contains(e.target) &&
			document.getElementById("menu-icon").classList.contains("active")) {
			document.getElementById("menu-icon").classList.remove("active")
		}
	}

	const handleWindowScroll = e => {
		const navbar = document.querySelector(".navbar");

		if (window.scrollY > 0) {
			navbar.classList.add("sticky");
		}
	
		if (window.scrollY === 0) {
			navbar.classList.remove("sticky");
		}
	}
		

	useEffect(() => {
		const navbarLinks = document.querySelectorAll(".navbar ul li");
		// navbarLinks.forEach( link => {
		// 	link.addEventListener("click", e => {
		// 		// e.preventDefault();
		// 		navbarLinks.forEach(link => {
		// 			link.classList.remove("active");
		// 		})
		// 		link.classList.add("active");
		// 		console.log("remove active then add active")
		// 	})
		// })

		document.addEventListener('mousedown', handleClickOutside);
		window.addEventListener("scroll", handleWindowScroll);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			window.removeEventListener("scroll", handleWindowScroll);
		}

	}, [])

	return (
		<div className="navbar">
			<a href="/" className="navbar-logo link">LOG<span>O</span></a>
			<div id="menu-icon" className="menu-icon" onClick={toggleMenu} ref={menuIconRef}>
				<div className="line-1 menu-icon-line"></div>
				<div className="line-2 menu-icon-line"></div>
				<div className="line-3 menu-icon-line"></div>
			</div>
			<ul className="navbar-links" ref={navLinksRef}>
				<li className="login-li"><a href="/login" className="navbar-link">Login</a></li>
				<li className="signup-li"><a href="/signup" className="navbar-link">Sign Up</a></li>
				<li className="about-li"><a href="/about" className="navbar-link">About</a></li>
				<li className="restaurants-li"><a href="/restaurants" className="navbar-link">Restaurants</a></li>
			</ul>
		</div >
	)
}
