import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/charac-card.js";
import { PlanetsCard } from "../component/planets-card.js";
import { VehicleCard } from "../component/vehicle-card.js";

export const Home = (props) => {
  const { store, actions } = useContext(Context);

  // Estado para almacenar el color del título que cambia
  const [titleColor, setTitleColor] = useState("red");

  // Efecto para cambiar el color del título cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cambiar el color a un color aleatorio
      const randomColor = getRandomColor();
      setTitleColor(randomColor);
    }, 2000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);

  }, []);

  // Efecto para cargar la primera página al montar el componente
  useEffect(() => {
    actions.getPeopleData();
  }, []);

  useEffect(() => {
    actions.getPlanetsData();
  }, []);

  useEffect(() => {
    actions.getVehicleData();
  }, []);

  // Función para generar un color hexadecimal aleatorio
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
// Manejar el cambio de página
const handlePageChange0 = () => {
  actions.getPeopleData();
};
  // Manejar el cambio de página
  const handlePageChange = () => {
    actions.getPeopleData1();
  };
  const handlePageChange1 = () => {
    actions.getPeopleData2();
  };
  const handlePageChange2 = () => {
    actions.getPeopleData3();
  };

  return (
    <div className="container">
      <div className="container m-3 justify-content-center">
        <div id="characters" className="mt-5 text-center">
          {/* Título que cambia de color */}
          <h1 style={{ color: titleColor }}>CHARACTERS</h1>
        </div>
        <div className="d-flex h-scrollbar" style={{ overflowX: "auto" }}>
          <div className="d-flex">
            {store.people?.map((people) => (
              <CharacterCard name={people.name} index={people.uid} path="charDetails" />
            ))}
          </div>
        </div>
        <button onClick={handlePageChange0} className="btn btn-outline-success border-3 m-3">
          Page 1
        </button>
        <button onClick={handlePageChange} className="btn btn-outline-success border-3 m-3">
          Page 2
        </button>
        <button onClick={handlePageChange1} className="btn btn-outline-success border-3 m-3">
          Page 3
        </button>
        <button onClick={handlePageChange2} className="btn btn-outline-success border-3 m-3">
          Page 4
        </button>
      </div>
      <div className="container m-3 justify-content-center">
        <div id="planets" className="mt-5 text-center">
          {/* Título que cambia de color */}
          <h1 style={{ color: titleColor }}>PLANETS</h1>
        </div>
        <div className="d-flex h-scrollbar" style={{ overflowX: "auto" }}>
          <div className="d-flex">
            {store.planets?.map((planet) => (
              <PlanetsCard name={planet.name} index={planet.uid} path="planetsDetails" />
            ))}
          </div>
        </div>
      </div>
      <div className="container m-3 justify-content-center">
        <div id="vehicles" className="mt-5 text-center">
          {/* Título que cambia de color */}
          <h1 style={{ color: titleColor }}>VEHICLES</h1>
        </div>
        <div className="d-flex h-scrollbar" style={{ overflowX: "auto" }}>
          <div className="d-flex">
            {store.vehicle?.map((vehicle) => (
              <VehicleCard name={vehicle.name} index={vehicle.uid} path="vehicleDetails" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


