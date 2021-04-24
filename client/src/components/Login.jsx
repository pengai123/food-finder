import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Login() {

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [formMsg, setFormMsg] = useState("")


	const handleSubmit = e => {
		e.preventDefault();

		if (username && password) {
			axios.get(`/accounts-server/${username}`)
				.then(result => {
					if (result.data === "") {
						setFormMsg("Username does not exist")
					} else {
						if (result.data.password === password) {
							setFormMsg("Log in successfully")
						} else {
							setFormMsg("Invalid password")
						}
					}
				})

		} else {
			setFormMsg("please complete the form before submitting")
		}
	}

	useEffect(() => {
		const formInputs = document.querySelectorAll(".form-input");
		const loginLink = document.querySelector(".login-li")
		loginLink.classList.add("active");

		formInputs.forEach(input => {
			input.addEventListener("focus", () => {
				input.classList.add("focus");
				setFormMsg("")
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

			loginLink.classList.remove("active");
		}
	}, [])


	return (
		<div className="page-container login-page">
			<form className="login-form">
				<h1>Login</h1>
				<div className="input-wrapper">
					<input name="username" type="text" className="form-input" autoComplete="off"
						value={username} onChange={e => setUsername(e.target.value)} />
					<span className="input-label">Username</span>
					<span className="input-underline"></span>
				</div>
				<div className="input-wrapper">
					<input name="password" type="password" className="form-input"
						value={password} onChange={e => setPassword(e.target.value)} />
					<span className="input-label">Password</span>
					<span className="input-underline"></span>
				</div>
				<button className="form-btn" onClick={handleSubmit}>Login</button>
				<p className="form-msg">{formMsg}</p>
				<p className="form-text">Don't have an account? <a href="/signup">Sign up</a></p>
			</form>
		</div>
	)
}

