import React, { useState } from 'react'
import Input from './assets/Components/Input/Input';
import ReCAPTCHA from 'react-google-recaptcha';

export default function App() {
	const apiKey = '6Lcww3kqAAAAAOkQ6UqoRugnpzicdEz2ECPbxb4O';
	const [cap, setCap] = useState(null);
	let button = <button disabled={false}>Login</button>

	if(cap === null) {
		button = <button disabled={true}>Login</button>
	}

	return (
		<>
			<h1 className="title">Login</h1>
			<form>
				<Input label='Email' type='email' />
				<Input label='Password' type='password' />
				<a href="#" className='forgot'>Forgot Password?</a>
				<ReCAPTCHA sitekey={apiKey} onChange={(val) => setCap(val)} />

				{button}
				<p>Don't have an account? <a href="#"> Sign up</a></p>
				<p>For help, please contact <span className='email'>
				support@campusplatz.com</span></p>
			</form>
		</>
	)
}
