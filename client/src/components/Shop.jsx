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
		return () => {
			setBanners([])
		}
	}, [])

	return (
		<div className="page-container shop-page">
			<h2>Banner List</h2>
			<ul className="banner-list">
				{banners.map(banner => (
					<li className="banner-list-item" key={banner.id}>
						<a href={`/shop/${banner.id}/${banner.devName}`} className="link" style={{color: 'white'}}>{banner.devName}</a>
					</li>
				))}
			</ul>
		</div>
	)
}
