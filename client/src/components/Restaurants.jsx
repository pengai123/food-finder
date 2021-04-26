import axios from 'axios';
import React, { useState, useEffect } from 'react'
import RestaurantCard from "./RestaurantCard.jsx"
import Loader from "./Loader.jsx"

export default function Restaurants({ match }) {
	const [location, setLocation] = useState("");
	const [keyword, setKeyword] = useState("");
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [total, setTotal] = useState(0)
	const [startNumber, setStartNumber] = useState(0)

	const getHref = () => {
		if (location === "" && keyword === "") {
			return "/restaurants/phoenix"
		}
		if (location === "" && keyword !== "") {
			return `/restaurants/phoenix/${keyword}`
		}
		if (location !== "" && keyword === "") {
			return `/restaurants/${location}`;
		}
		if (location !== "" && keyword !== "") {
			return `/restaurants/${location}/${keyword}`;
		}
	}

	const search = (loc, kw = "", start = 0) => {

		setIsLoading(true);
		axios.get(`/api/restaurants/${loc}?kw=${kw}&start=${start}`)
			.then(result => {
				console.log('result.data', result.data)
				setRestaurants(result.data.restaurants);
				setLocation(result.data.location.city_name);
				setTotal(result.data.total);
				if (kw) {
					setKeyword(kw);
				}
				setIsLoading(false);
			})
	}

	useEffect(() => {
		const restaurantsLink = document.querySelector(".restaurants-li")
		restaurantsLink.classList.add("active");

		search(match.params.location, match.params.keyword);
		return () => {
			restaurantsLink.classList.remove("active");
		}
	}, [])

	return (
		<div>
			<div className="page-container restaurants-page">
				<div className="search-area">
					<div className="location-input-wrapper">
						<input type="text" placeholder="Location" className="location-input"
							value={location} onChange={e => setLocation(e.target.value)} />
						<i className="fas fa-map-marker-alt location-input-icon"></i>
					</div>
					<div className="keyword-input-wrapper">
						<input type="text" placeholder="Restaurant, cuisine or a dish" className="keyword-input"
							value={keyword} onChange={e => setKeyword(e.target.value)} />
						<i className="fas fa-search keyword-input-icon"></i>
					</div>
					{/* <button href="/restaurants/phoenix/pizza">Search</button> */}
					<a href={getHref()}>Search</a>
				</div>
				<div className="search-result">
					<p className="result-text">{total} results found for <span>{match.params.keyword}</span> restaurants in <span>{match.params.location ? match.params.location : "Phoenix"}</span>:</p>
					<div className="restaurants-container">
						{restaurants.map((restaurant, idx) => <RestaurantCard restaurant={restaurant} key={idx} />)}
					</div>
				</div>
			</div>
			{isLoading && <Loader />}
		</div>
	)
}
