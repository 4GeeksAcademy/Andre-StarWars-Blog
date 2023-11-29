// Definición de la función getState, que devuelve el estado y las acciones del almacenamiento
const getState = ({ getStore, getActions, setStore }) => {
	return {
		// Estado inicial del almacenamiento con las listas de people, planets, vehicles y favorites
		store: {
			personajes:[],
			planetas: [],
			vehiculos: [],
			favoritos: [],
			//Demo que ya estaba en el template
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		// Acciones disponibles para modificar el estado
		actions: {
			// Obtener datos de personas (people) desde la API
			getPersonajesData: () => {
				// Obtener el estado actual del almacenamiento
				const store = getStore();

				// Realizar una solicitud GET a la API de Star Wars para obtener datos sobre personas
				fetch("http://www.swapi.tech/api/people")
				.then(resp => resp.json())
				.then(data => {
					// Actualizar el estado con la lista de personajes obtenida
					setStore({ personajes: data.results });
				})	
				.catch(error => {
					console.log(error); // Manejar errores en la consola
				});
			},
			// Obtener detalles de una persona específica según su ID
			getPersonajesDetalle: (id, setPersonaje) => {
				const store = getStore();

				fetch("https://www.swapi.tech/api/people/${id}")
                    .then(resp => resp.json())
                    .then(data => {
                        // Llamar a la función setParam para establecer los detalles de la persona
                        setPersonaje(data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
			},

			// Obtener datos de planetas desde la API
            getPlanetasData: () => {
                const store = getStore();

                fetch("https://www.swapi.tech/api/planets")
                    .then(resp => resp.json())
                    .then(data => {
                        // Actualizar el estado con la lista de planetas obtenida
                        setStore({ planetas: data.results });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
			 // Obtener detalles de un planeta específico según su ID
			 getPlanetasDetalles: (id, setPlaneta) => {
                const store = getStore();

                fetch("https://www.swapi.tech/api/planets/${id}")
                    .then(resp => resp.json())
                    .then(data => {
                        setPlaneta(data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
			// Obtener datos de vehículos desde la API
            getVehiculoData: () => {
                const store = getStore();

                fetch("https://www.swapi.tech/api/vehicles")
                    .then(resp => resp.json())
                    .then(data => {
                        // Actualizar el estado con la lista de vehículos obtenida
                        setStore({ vehiculo: data.results });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
			// Obtener detalles de un vehículo específico según su ID
            getVehiculoDetalle: (id, setVehiculo) => {
                const store = getStore();

                fetch("https://www.swapi.tech/api/vehicles/${id}")
                    .then(resp => resp.json())
                    .then(data => {
                        setVehiculo(data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },


			//Demo que ya estaba en el template
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
