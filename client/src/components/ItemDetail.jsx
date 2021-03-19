import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function ItemDetail({ match, location }) {

	const [itemId, setItemId] = useState("");
	const [itemName, setItemName] = useState("");
	const [icon, setIcon] = useState("")

	useEffect(() => {
		console.log('id:', match.params.id)
		console.log('icon:', location.currentBanner.images.icon)
		setItemId(match.params.id)
		setItemName(match.params.name)
		setIcon(location.currentBanner.images.icon)

		return () => {
			setItemId("")
			setItemName("")
			setIcon("")
		}
	}, [])

	return (
		<div className="page-container item-detail-container">
			<h1>Item Detail</h1>
			<h2>item id: {itemId}</h2>
			<h2>item name: {itemName}</h2>
			<div className="icon-container">
				<img src={icon} className="icon"></img>
			</div>
		</div>
	)
}
