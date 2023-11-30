import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3 mt-3 justify-content-evenly">
			<Link to="/">
				<img className="w-25" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" />
				<button className="ms-2 btn btn-outline-success border-3">Regresar</button>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-outline-success border-3">Favoritos</button>
				</Link>
			</div>
			
		</nav>
	);
};