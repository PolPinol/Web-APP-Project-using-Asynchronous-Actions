/**
 * Code controller of index page
 *
 * @author: Inés Graells - Pol Piñol - Alexia Cabrera
 */

 import {} from "../components/label";
 import Api from "../services/api";
 
 const app = new Vue({
   el: "#overwatch",
   data: () => {
     return {
       characters: [],
       data: "",
       searchInput: ""
     };
   },
   mounted() {
     this.loadData();
   },
   methods: {
     loadData() {
       const getCharacters = new Api();
       getCharacters.execute().then( data  => {
         this.$root.characters = data;
       });
     }
   }
 });