import React from 'react';
import Nav from "./Nav.jsx";
import Shop from "./Shop.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";
import ItemDetail from "./ItemDetail.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/shop" component={Shop} />
				<Route path="/shop/:id" component={ItemDetail} />
			</Switch>
		</Router>
	)
}
