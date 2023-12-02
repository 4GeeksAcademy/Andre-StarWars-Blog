import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const PlanetsCard = (props) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mx-3 bg-gra">
			<div className="card mb-2" style={{ width: "18rem" }}>
				<img
					src={props.index == 1 ? "https://raw.githubusercontent.com/4GeeksAcademy/Andre-StarWars-Blog/master/src/img/Los-mayores-villanos-de-Star-Wars.png" : `https://starwars-visualguide.com/assets/img/planets/${props.index}.jpg`}
					className="card-img-top noPicture"
					alt="Plantes"
				/>
				<div className="card-body bg-gra">
					<h5 className="card-title">{props.name}</h5>
					<div className="buttons d-flex justify-content-between mt-3">
						<Link to={"planetsDetails/" + props.index} className="btn btn-outline-success border-3">
							Learn More!
						</Link>
						<button onClick={() => {!store.favorites.includes(props.name) ? actions.addFavorite(props.name) : ""}} 
        					type="button" className={`btn btn-outline-success border-3 ${store.favorites.includes(props.name) ? "active" : ""}`}>
    						<i className="far fa-heart"></i>
						</button>

					</div>
				</div>
			</div>
		</div>
	);
};

PlanetsCard.propTypes = {
	name: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
};