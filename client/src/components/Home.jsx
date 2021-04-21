import React from 'react'

export default function Home() {
	return (
		<div className="home-page page-container">
			<video className="bg-video" src="/food.mp4" autoPlay muted loop></video>
			<div className="bg-overlay"></div>
			<div className="page-content">
				<h1>DISCOVER THE BEST FOOD</h1>
				<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quaerat eligendi? Illo.</h2>
				<div className="search-area">
					<div className="location-input-wrapper">
						<input type="text" placeholder="Location" className="location-input" />
						<i className="fas fa-map-marker-alt location-input-icon"></i>
					</div>
					<div className="keyword-input-wrapper">
						<input type="text" placeholder="Restaurant, cuisine or a dish" className="keyword-input" />
						<i className="fas fa-search keyword-input-icon"></i>
					</div>
					{/* <button href="/restaurants/phoenix/pizza">Search</button> */}
					<a href="/restaurants/phoenix/pizza">Search</a>
				</div>
			</div>
		</div>
	)
}
