import React, { useState, useEffect } from "react";
import getState from "./flux.js";

//Demo que ya estaba en el template
// No cambies esto, aquí es donde inicializamos nuestro contexto, por defecto va a ser null.
export const Context = React.createContext(null);

// Esta función inyecta el almacén global en cualquier vista/componente donde desees usarlo.
// Inyectaremos el contexto en layout.js, puedes verlo aquí:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		// Esto se pasará como el valor del contexto
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			// Llamar a las acciones para obtener datos iniciales
			state.actions.getPersonajesData();
			state.actions.getPlanetasData();
			state.actions.getVehiculoData();
		}, []);

		// El valor inicial del contexto ya no es null, sino el estado actual de este componente.
		// El contexto ahora tendrá funciones getStore, getActions y setStore disponibles,
		// porque fueron declaradas en el estado de este componente.
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
