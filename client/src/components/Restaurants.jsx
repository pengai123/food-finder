import axios from 'axios';
import React, { useState, useEffect } from 'react'
import RestaurantCard from "./RestaurantCard.jsx"
import Loader from "./Loader.jsx"

export default function Restaurants({ match }) {
	const [location, setLocation] = useState("");
	const [keyword, setKeyword] = useState("");
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getHref = () => {
		if (location === "") {
			return "/restaurants"
		}
		if (location !== "" && keyword === "") {
			return `/restaurants/${location}`;
		}
		if (location !== "" && keyword !== "") {
			return `/restaurants/${location}/${keyword}`;
		}
	}

	const search = (loc = "phoenix", kw = "", start = 0) => {

		setIsLoading(true);
		axios.get(`/restaurants-server/${loc}?kw=${kw}&start=${start}`)
			.then(result => {
				console.log('result.data', result.data)
				setRestaurants(result.data.restaurants);
				setLocation(result.data.location.city_name)
				if(kw) {
					setKeyword(kw);
				}
				setIsLoading(false);
			})
	}

	useEffect(() => {
		search(match.params.location, match.params.keyword);
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
			<div className="restaurants-container">
				{/* <h1>Search results for "{match.params.keyword}" restaurants in "{match.params.location}":</h1> */}
				{restaurants.map((restaurant, idx) => <RestaurantCard restaurant={restaurant} key={idx} />)}
			</div>
		</div>
		{isLoading && <Loader />}
		</div>
	)
}
