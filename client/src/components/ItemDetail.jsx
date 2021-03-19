import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function ItemDetail(match) {

	const [itemId, setItemId] = useState("");
	const [itemName, setItemName] = useState("");

	useEffect(() => {
		console.log('match:', match)
		console.log('id:', match.match.params.id)
		setItemId(match.match.params.id)
		setItemName(match.match.params.name)
	}, [])

	return (
		<div className="page-container">
			<h1>Item Detail</h1>
			<h2>item id: { itemId }</h2>
			<h2>item name: { itemName }</h2>
		</div>
	)
}
