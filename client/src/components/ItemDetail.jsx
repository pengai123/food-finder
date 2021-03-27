import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function ItemDetail({ match, location }) {

	const [icon, setIcon] = useState("")

	useEffect(() => {

		//handle direct access to links
		if (location.currentBanner) {
			console.log('icon:', location.currentBanner.images.icon)
			setIcon(location.currentBanner.images.icon)
		}

	}, [])

	return (
		<div className="page-container item-detail-container">
			<h1>Item Detail</h1>
			<h2>item id: {match.params.id}</h2>
			<h2>item name: {match.params.name}</h2>
			{location.currentBanner && <div className="icon-container">
				<img src={icon} className="icon"></img>
			</div>}
		</div>
	)
}
