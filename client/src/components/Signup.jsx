import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function Signup() {

	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [passwordConfirm, setPasswordConfirm] = useState("")
	const [formMsg, setFormMsg] = useState("")


	const handleSubmit = e => {
		e.preventDefault();

		if (username && email && password && passwordConfirm) {
			if (password === passwordConfirm) {
				let userObj = { username, email, password };
				axios.post("/accounts-server", userObj)
				.then (result => {
					console.log(result.data)
					if(!result.data.code){
						setFormMsg("Sign up successfully")
					} else {
						setFormMsg("Username is already taken")
					}
				})
				.catch (err => console.log(err))
			} else {
				setFormMsg("Passwords dont match")
			}
		} else {
			setFormMsg("Please complete the form before submitting")
		}
	}

	useEffect(() => {
		const formInputs = document.querySelectorAll(".form-input");

		formInputs.forEach(input => {
			input.addEventListener("focus", () => {
				input.classList.add("focus");
			})
			input.addEventListener("blur", () => {
				if (input.value === "") {
					input.classList.remove("focus");
				}
			})
		})

		return () => {
			formInputs.forEach(input => {
				input.removeEventListener("focus", () => {
					input.classList.add("focus");
				})
				input.removeEventListener("blur", () => {
					if (input.value === "") {
						input.classList.remove("focus");
					}
				})
			})
		}
	}, [])


	return (
		<div className="page-container signup-page">
			<form className="signup-form">
				<h1>Sign Up</h1>
				<div className="input-wrapper">
					<input name="username" type="text" className="form-input" autoComplete="off"
						value={username} onChange={e => setUsername(e.target.value)} />
					<span className="input-label">Username</span>
					<span className="input-underline"></span>
				</div>
				<div className="input-wrapper">
					<input name="email" type="text" className="form-input" autoComplete="off"
						value={email} onChange={e => setEmail(e.target.value)} />
					<span className="input-label">Email</span>
					<span className="input-underline"></span>
				</div>
				<div className="input-wrapper">
					<input name="password" type="password" className="form-input"
						value={password} onChange={e => setPassword(e.target.value)} />
					<span className="input-label">Password</span>
					<span className="input-underline"></span>
				</div>
				<div className="input-wrapper">
					<input name="password" type="password" className="form-input"
						value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
					<span className="input-label">Confirm Password</span>
					<span className="input-underline"></span>
				</div>
				<button className="form-btn" onClick={handleSubmit}>Sign Up</button>
				<p className="form-msg">{formMsg}</p>
				<p className="form-text">Already have an account? <a href="/login">Login</a></p>
			</form>
		</div>
	)
}

