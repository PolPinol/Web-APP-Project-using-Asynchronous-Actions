import {} from "../components/searchForm";
import {} from "../components/label";
import Api from "../services/api";

const app = new Vue({
	el: "#overwatch",

	// Variables from our js
   	data: () => {
     	return {
       		characters: [],
       		data: "",
       		searchInput: ""
     	};
   	},

	// Default mounted to show all characters
   	mounted() {
     	this.loadData();
   	},

	// Differents methods of our app
   	methods: {
		// Method that gets all the characters from the api
     	loadData() {
       		const getCharacters = new Api();
       		getCharacters.execute().then( data  => {
         		this.$root.characters = data;
       		});
     	},
     	
		// Method that gets all the characters from the api filtering with variable searchInput
		loadDataWithSearch() {
      		const getCharacters = new Api();
      		getCharacters.executeSearch(this.$root.searchInput).then( data  => {
        		this.$root.characters = data;
      		});
    	}
   	}
});