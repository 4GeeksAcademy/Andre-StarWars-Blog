import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const CharacterCard2 = (props) => {
	const { store, actions } = useContext(Context);
	const [active, setActive] = useState(false);

	return (
		<div className="mx-3 bg-gra">
			<div className="card mb-2" style={{ width: "18rem" }}>
				<img
					src={`https://starwars-visualguide.com/assets/img/characters/${props.index}.jpg`}
					className="card-img-top"
					alt="Character"
				/>
				<div className="card-body bg-gra">
					<h5 className="card-title">{props.name}</h5>
					<div className="buttons d-flex justify-content-between mt-3">
						<Link to={"charDetails/" + props.index} className="btn btn-outline-success border-3">
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

CharacterCard2.propTypes = {
	name: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
};