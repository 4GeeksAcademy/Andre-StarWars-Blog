import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const PlanetsDetails = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const [planet, setPlanet] = useState();

    useEffect(() => {
        actions.getPlanetsDetails(params.id, setPlanet);
    }, [params.id]);

    return (
        <div className="text-center mt-5">
            {planet && planet.result.properties.name ? (
                <div>
                    <div className="d-flex m-5 justify-content-center">
                        <img
                            className="noPicture"
                            src={planet.result.uid == 1 ? "https://raw.githubusercontent.com/4GeeksAcademy/Andre-StarWars-Blog/master/src/img/Los-mayores-villanos-de-Star-Wars.png" : `https://starwars-visualguide.com/assets/img/planets/${planet.result.uid}.jpg`}
                            alt="Placeholder Image"
                        />
                        <div className="m-5 text-white">
                            <h1 className="fs-2">{planet.result.properties.name}</h1>
                            <p className="fs-5 description-paragraph">{planet.result.description}</p>
                        </div>
                    </div>
                    <div className="d-flex text-white justify-content-around m-3 fs-5 border-5 border-success border">
                        <div className="">
                            <p className=""><strong>Diameter</strong></p>
                            <p className="">{planet.result.properties.diameter}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Rotation period</strong></p>
                            <p className="">{planet.result.properties.rotation_period}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Orbital period</strong></p>
                            <p className="">{planet.result.properties.orbital_period}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Gravity</strong></p>
                            <p className="">{planet.result.properties.gravity}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Population</strong></p>
                            <p className="">{planet.result.properties.population}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Climate</strong></p>
                            <p className="">{planet.result.properties.climate}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Terrain</strong></p>
                            <p className="">{planet.result.properties.terrain}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Surface water</strong></p>
                            <p className="">{planet.result.properties.surface_water}</p>
                        </div>
                    </div>
                </div>
            ) : ""}
        </div>
    );
};
