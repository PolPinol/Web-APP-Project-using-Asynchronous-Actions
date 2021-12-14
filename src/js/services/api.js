// Class that manages the petitions to the api
export default class Api {
    // Method that connects to the api to extract all data from the characters
    execute() {
        return fetch(
            `http://localhost:3000/api/list?search=`
        ).then((response) => response.json());
    }

    // Method that connects to the api to extract all data filter by the searchInput from the characters
    executeSearch(searchInput) {
        return fetch(
            `http://localhost:3000/api/list?search=${searchInput}`
        ).then((response) => response.json());
    }
}