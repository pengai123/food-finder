import React, { useEffect } from 'react'

export default function Login() {
	

	useEffect(() => {
		const formInputs = document.querySelectorAll(".form-input");

		formInputs.forEach(input => {
			input.addEventListener("focus", () => {
				input.classList.add("focus");
			})
			input.addEventListener("blur", () => {
				if(input.value === ""){
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
					if(input.value === ""){
						input.classList.remove("focus");
					}
				})
			})
		}
	}, [])


	return (
		<div className="page-container login-page">
			<form className="login-form">
				<h1>Login</h1>
				<div className="input-wrapper">
					<input name="username" type="text" className="form-input" autoComplete="off"/>
					<span className="input-label">Username</span>
					<span className="input-underline"></span>
				</div>
				<div className="input-wrapper">
					<input name="password" type="password" className="form-input" />
					<span className="input-label">Password</span>
					<span className="input-underline"></span>
				</div>
				<button className="form-btn">Login</button>
				<p className="form-text">Don't have an account? <a href="/signup">Sign up</a></p>
			</form>
		</div>
	)
}

