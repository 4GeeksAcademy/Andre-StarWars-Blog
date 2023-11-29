import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const PersonajeCard = (props) => {
    // Obtener el estado y las acciones del contexto global
    useContext(Context);

    // Estado local para gestionar el estado activo del componente
    const [] = useState(false);

    return (
        <div className="card" style={"width: 18rem"}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.index}.jpg`} className="card-img-top" alt="Imagen de muestra" ></img>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <Link to={"charDetails/" + props.index}>
                <button type="button" className="btn btn-outline-secondary">¡Aprender más!</button>
                </Link>
            </div>
    </div>
    );
};
