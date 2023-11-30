import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const handleGoHome = () => {
		actions.setCurrentPage(1);
	  };
	return (
		<nav className="nave navbar mb-3 mt-3 justify-content-evenly">
			<Link to="/">
				<img className="w-25" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" />
				<button className="ms-2 btn btn-outline-success border-3">Home</button>
			</Link>
			<div className="ml-auto">
				<Link  className="navbar-brand" to="/Home" onClick={handleGoHome}>
					<button className="btn btn-outline-success border-3">See Favorites</button>
				</Link>
			</div>
			<div className="dropdown">
    			<button className="btn btn-outline-success border-3 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        		Favorites
        		<span className="ms-2 border border-success rounded-pill p-1">
            		<strong>{store.favorites.length}</strong>
        		</span>
    			</button>

    			<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
        			{(store.favorites && store.favorites.length > 0) ?
            			store.favorites.map((item, index) => (
                <Link to={item && item.path ? ("/" + item.path + "/" + item.index) : ""} style={{ textDecoration: 'none' }}>
                    <li key={item}>
                        <a className="dropdown-item d-flex justify-content-between">{item}<i onClick={() => actions.deleteFavorite(index)} className="trash fas fa-trash-alt mt-1 ms-3"></i></a>
                    </li>
                </Link>
            ))
            : <li className="text-center">Empty!</li>}
    			</ul>
			</div>
		</nav>
	);
};