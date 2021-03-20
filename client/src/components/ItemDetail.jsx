import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function ItemDetail({ match, location }) {

	const [itemId, setItemId] = useState("");
	const [itemName, setItemName] = useState("");
	const [icon, setIcon] = useState("")

	useEffect(() => {
		console.log('id:', match.params.id)
		setItemId(match.params.id)
		setItemName(match.params.name)

		//handle direct access to links
		if (location.currentBanner) {
			console.log('icon:', location.currentBanner.images.icon)
			setIcon(location.currentBanner.images.icon)
		}

		return () => {
			setItemId("")
			setItemName("")
			if (location.currentBanner) {
				setIcon("")
			}
		}
	}, [])

	return (
		<div className="page-container item-detail-container">
			<h1>Item Detail</h1>
			<h2>item id: {itemId}</h2>
			<h2>item name: {itemName}</h2>
			{location.currentBanner && <div className="icon-container">
				<img src={icon} className="icon"></img>
			</div>}
		</div>
	)
}
