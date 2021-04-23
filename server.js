const express = require("express")
const app = express()
const bp = require("body-parser")
const PORT = process.env.PORT || 3000
const axios = require("axios")
// const config = require("./config.js")
const dbHandlers = require("./database/handlers")

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(express.static("./client/dist"))

const zomatoConfig = {
	headers: {
		"user-key": process.env.user_key || config.zomato_user_key
	}
};

app.get("/hello", (req, res) => {
	res.send("hello from server!")
})


app.get("/hello/:id", (req, res) => {
	res.send(req.params.id)
})


//create new account
app.post("/accounts-server", (req, res) => {
	dbHandlers.newAccount(req.body, (err, result) => {
		if (err) { res.send(err) }
		else { res.send(result) }
	})
})

//find an account
app.get("/accounts-server/:username", (req, res) => {
	dbHandlers.findAccount({ username: req.params.username }, (err, result) => {
		if (err) { res.send(err) }
		else { res.send(result) }
	})
})


//get restaurants data from API
app.get("/restaurants-server/:loc", (req, res) => {

	let loc = req.params.loc;
	let start = req.query.start;
	let keyword = req.query.kw;
	// console.log('loc:', loc)
	// console.log('start:', start)
	// console.log('keyWord:', kw)
	axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${loc}`, zomatoConfig)
		.then(result => {
			let location = result.data.location_suggestions[0];
			console.log('location:', location)
			axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${location.entity_id}&entity_type=${location.entity_type}&start=${start}&q=${keyword}`, zomatoConfig)
				.then(result => {
					console.log('result.data:', result.data)
					let restaurants = result.data.restaurants;
					let total = result.data.results_found;
					res.send({ location, total, restaurants });
				})
		})
})

// Handles react router and any requests that don't match the ones above
app.get('*', (req, res) => {
	res.sendFile(__dirname + '/client/dist/index.html');
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}...`))