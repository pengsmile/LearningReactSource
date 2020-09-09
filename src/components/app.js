import { render, h, Component } from '../preact';
import { Router } from '../preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

function App (props) {
	const handleRoute = value => {
		// console.log(value)
	}
	return (
		<div id="app">
			<Header />
			<Router onChange={handleRoute}>
				<Home path="/" />
				<Profile path="/profile/" user="me" />
				<Profile path="/profile/:user" />
			</Router>
		</div>
	);
}

window.onload = function () {  
	render(<App />, document.getElementById('root'))
}
export default App


