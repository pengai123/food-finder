const express = require("express")
const app = express()
const bp = require("body-parser")
const PORT = process.env.PORT || 3000

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(express.static("./client/dist"))

app.get("/hello", (req, res) => {
	res.send("hello from server!")
})


app.get("/hello/:id", (req, res) => {
	res.send(req.params.id)
})

// Handles react router and any requests that don't match the ones above
app.get('*', (req,res) =>{
	res.sendFile(__dirname +'/client/dist/index.html');
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}...`))