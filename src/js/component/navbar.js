import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<Link to="/counter">
				<span className="navbar-brand mb-0 h1">Counter</span>
			</Link>
			<Link to="/counter2">
				<span className="navbar-brand mb-0 h1">Counter2</span>
			</Link>
			<Link to="/resource">
				<span className="navbar-brand mb-0 h1">Resource</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
