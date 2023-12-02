import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const CharDetails = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const [param, setParam] = useState();
    const [homeworldName, setHomeworldName] = useState(null);

    useEffect(() => {
        actions.getPeopleDetails(params.id, setParam);
    }, [params.id]);

    useEffect(() => {
        // Verificar si "homeworld" existe y no está vacío
        if (param?.result?.properties?.homeworld) {
            // Obtener el nombre del planeta
            fetch(param.result.properties.homeworld)
                .then((response) => response.json())
                .then((data) => {
                    setHomeworldName(data.result.properties.name);
                })
                .catch((error) => {
                    console.error("Error fetching homeworld:", error);
                });
        }
    }, [param]);

    return (
        <div className="text-center mt-5">
            {param && param.result.properties.name ? (
                <div>
                    <div className="d-flex m-5 justify-content-center">
                        <img
                            className=""
                            src={`https://starwars-visualguide.com/assets/img/characters/${param.result.uid}.jpg`}
                            alt="Placeholder Image"
                        />
                        <div className="m-5 text-white">
                            <h1 className="fs-2">{param.result.properties.name}</h1>
                            <p className="fs-5 description-paragraph">{param.result.description}</p>
                        <video width="500" height="300"controls autoPlay>
                        <source src={`https://github.com/4GeeksAcademy/Andre-StarWars-Blog/raw/master/src/img/Star%20Wars%20Intro%20HD%201080p.mp4`} type="video/mp4" />
                        Tu navegador no soporta el tag de video.
                        </video>
                        </div>
                    </div>
                    <div className="d-flex text-white justify-content-around m-3 fs-5 border-5 border-success border">
                        <div className="">
                            <p className=""><strong>Height</strong></p>
                            <p className="">{param.result.properties.height}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Mass</strong></p>
                            <p className="">{param.result.properties.mass}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Hair Color</strong></p>
                            <p className="">{param.result.properties.hair_color}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Skin Color</strong></p>
                            <p className="">{param.result.properties.skin_color}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Eye Color</strong></p>
                            <p className="">{param.result.properties.eye_color}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Birth Year</strong></p>
                            <p className="">{param.result.properties.birth_year}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Gender</strong></p>
                            <p className="">{param.result.properties.gender}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Homeworld</strong></p>
                            <p className="">{homeworldName}</p>
                        </div>
                    </div>
                </div>
            ) : ""}
        </div>
    );
};

