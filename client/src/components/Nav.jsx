import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
	return (
		<div className="navbar">
			<Link to="/" className="navbar-logo link">
				LOGO
			</Link>
			<Link to="/about" className="navbar-item link">
				About
			</Link>
			<Link to="/shop" className="navbar-item link">
				Shop
			</Link>
		</div >
	)
}
