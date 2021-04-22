import React from 'react'

export default function RestaurantCard() {
	return (
		<div className="restaurant-card">
			<div className="image">
				<img src="https://picsum.photos/400/300" alt="" />
			</div>
			<div className="details">
				<h2>Restaurant Name</h2>
				<p className="rating">Lorem ipsum dolor sit amet.</p>
				<p className="price-cuisine">
					<span className="price-range">$$$$</span>
					<span className="cuisine">American, Breakfast, Southern</span>
				</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
		</div>
	)
}
