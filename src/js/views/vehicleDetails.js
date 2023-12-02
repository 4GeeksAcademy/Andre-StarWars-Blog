import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const VehicleDetails = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const [vehicle, setVehicle] = useState();

    useEffect(() => {
        actions.getVehicleDetails(params.id, setVehicle);
    }, [params.id]);

    return (
        <div className="text-center mt-5">
            {vehicle && vehicle.result.properties.name ? (
                <div>
                    <div className="d-flex m-5 justify-content-center">
                        <img
                            className="noPicture"
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.result.uid}.jpg`}
                            alt="Placeholder Image"
                        />
                        <div className="m-5 text-white">
                            <h1 className="fs-2">{vehicle.result.properties.name}</h1>
                            <p className="fs-5 description-paragraph">{vehicle.result.description}</p>
                        </div>
                    </div>
                    <div className="d-flex text-white justify-content-around m-3 fs-5 border-5 border-success border">
                        <div className="">
                            <p className=""><strong>Model</strong></p>
                            <p className="">{vehicle.result.properties.model}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Vehicle class</strong></p>
                            <p className="">{vehicle.result.properties.vehicle_class}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Manufacturer</strong></p>
                            <p className="">{vehicle.result.properties.manufacturer}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Cost in credits</strong></p>
                            <p className="">{vehicle.result.properties.cost_in_credits}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Length</strong></p>
                            <p className="">{vehicle.result.properties.length}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Crew</strong></p>
                            <p className="">{vehicle.result.properties.crew}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Passengers</strong></p>
                            <p className="">{vehicle.result.properties.passengers}</p>
                        </div>
                        <div className="">
                            <p className=""><strong>Cargo capacity</strong></p>
                            <p className="">{vehicle.result.properties.cargo_capacity}</p>
                        </div>
                    </div>
                </div>
            ) : ""}
        </div>
    );
};


