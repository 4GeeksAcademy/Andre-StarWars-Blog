const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			
		},
		actions: {
			getPeopleData: () => {
				//get the store
				const store = getStore();
				
				fetch("https://www.swapi.tech/api/people").then(resp => resp.json())
				.then(data => {
					setStore({people: data.results})
				})

				.then(console.log)

				.catch(error => {
					console.log(error);
				});
			}, 

			getPeopleDetails: (id, setParam) => {
				const store = getStore();
				
				fetch(`https://www.swapi.tech/api/people/${id}`).then(resp => resp.json())
				.then(data => {
					setParam(data)
				})

				.catch(error => {
					console.log(error);
				});
			},
		}
	};
};

export default getState;
