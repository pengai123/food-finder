import React, { useEffect } from 'react'

export default function About() {

	useEffect(() => {
		const aboutLink = document.querySelector(".about-li")
		aboutLink.classList.add("active");
		return () => {
			aboutLink.classList.remove("active");
		}
	}, [])

	return (
		<div className="page-container about-page">
			<h1>About Page Here!</h1>
		</div>
	)
}
