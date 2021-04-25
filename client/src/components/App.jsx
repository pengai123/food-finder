import React, { useState, useEffect } from 'react';
import Nav from "./Nav.jsx";
import Shop from "./Shop.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Footer from "./Footer.jsx";
import Restaurants from "./Restaurants.jsx";
import PageNotFound from "./PageNotFound.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie"

export const AuthContext = React.createContext();

export default function App() {

	const [currentUser, setCurrentUser] = useState(undefined)

	useEffect(() => {
		// check current user from cookies
		console.log('currentUser from cookie:', Cookies.get("current-user"))
		setCurrentUser(Cookies.get("current-user"))
	}, [])

	return (
		<div>
			<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
				<Router>
					<Nav />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
						<Route path="/about" component={About} />
						<Route path="/shop" exact component={Shop} />
						<Route path={["/Restaurants/:location/:keyword", "/Restaurants/:location", "/Restaurants"]} component={Restaurants} />
						<Route path="*" component={PageNotFound} />
					</Switch>
					<Footer />
				</Router>
			</AuthContext.Provider>
		</div>
	)
}
