import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
	return (
		<div className="navbar">
			<Link to="/" className="navbar-logo">
				<div>LOGO</div>
			</Link>
			<Link to="/about" className="navbar-item">
				<div>About</div>
			</Link>
			<Link to="/shop" className="navbar-item">
				<div>Shop</div>
			</Link>
		</div>
	)
}
