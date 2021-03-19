import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Shop() {

	const [banners, setBanners] = useState([]);

	useEffect(() => {
		axios.get("https://fortnite-api.com/v1/banners")
			.then(result => {
				setBanners(result.data.data)
				console.log('result.data.data:', result.data.data)
			})
	}, [])

	return (
		<div className="page-container">
			<h2>Banner List</h2>
			<ul className="banner-list">
				{banners.map(banner => (
					<li className="banner-list-item" key={banner.id}>
						<Link className="link" to={`/shop/${banner.id}/${banner.devName}`}>
							{banner.devName}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
