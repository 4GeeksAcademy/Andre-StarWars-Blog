const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			favorites: [],
			currentPage: 1
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
			setCurrentPage: page => {
				const store = getStore();
				setStore({ currentPage: page });
			},
			getPeopleData1: () => {
				//get the store
				const store = getStore();
				
				fetch("https://www.swapi.tech/api/people?page=2&limit=10").then(resp => resp.json())
				.then(data => {
					setStore({people: data.results})
				})

				.then(console.log)

				.catch(error => {
					console.log(error);
				});
			},
			getPeopleData2: () => {
				//get the store
				const store = getStore();
				
				fetch("https://www.swapi.tech/api/people?page=3&limit=10").then(resp => resp.json())
				.then(data => {
					setStore({people: data.results})
				})

				.then(console.log)

				.catch(error => {
					console.log(error);
				});
			},
			getPeopleData3: () => {
				//get the store
				const store = getStore();
				
				fetch("https://www.swapi.tech/api/people?page=4&limit=10").then(resp => resp.json())
				.then(data => {
					setStore({people: data.results})
				})

				.then(console.log)

				.catch(error => {
					console.log(error);
				});
			},
			addFavorite: (item) => {
				const store = getStore();
                const favorite = store.favorites.concat(item);
                setStore({ favorites: favorite });
			},

			deleteFavorite: (index) => {
				const store = getStore();
                const favorite = store.favorites.filter((_c, i) => {
                    return index !== i
                });
                setStore({ favorites: favorite });
			}
		}
	};
};

export default getState;
