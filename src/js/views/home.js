import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/charac-card.js";

export const Home = (props) => {
  const { store, actions } = useContext(Context);

  // Estado para almacenar el color del título que cambia
  const [titleColor, setTitleColor] = useState("white");

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

  // Función para generar un color hexadecimal aleatorio
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  // Manejar el cambio de página
  const handlePageChange = () => {
    actions.getPeopleData1();
  };

  return (
    <div className="container">
      <div className="container m-3 justify-content-center">
        <div id="characters" className="mt-5 text-center">
          {/* Título que cambia de color */}
          <h1 style={{ color: titleColor }}>Characters</h1>
        </div>
        <div className="d-flex h-scrollbar" style={{ overflowX: "auto" }}>
          <div className="d-flex">
            {store.people?.map((people) => (
              <CharacterCard name={people.name} index={people.uid} path="charDetails" />
            ))}
          </div>
        </div>
        <button onClick={handlePageChange} className="btn btn-primary mt-3">
          Load More
        </button>
      </div>
    </div>
  );
};


