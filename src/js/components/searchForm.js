// Vue component for search form. It includes the input and the button to submit the filter for the characters.
Vue.component("search-form", {
    // Variable to filter the characters
    data: () => {
        return {
            searchInput: ""
        };
    },

    // HTML for the search form
    template: `
        <form v-on:submit.prevent="search">
        <input type="submit" value="SEARCH" class="search">
        <input type="text" v-model="searchInput" size="50" class="input">
        </form>`,

    // Method that ask $root to update the characters with new filter 
    methods: {
        search(event) {
            this.$root.searchInput = this.searchInput;
            this.$root.loadDataWithSearch();
        }
    }
});
  