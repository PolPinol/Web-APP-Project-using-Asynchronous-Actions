/**
 * Code controller of index page
 *
 * @author: Inés Graells - Pol Piñol - Alexia Cabrera
 */

class ApiInfo{
    constructor(){
        this.characters = {}
        this.request = new Request('http://localhost:3000/api/list?search=', {
            method: 'GET'
            
        });
    }

    saveData(){
        this.characters = fetch(this.request)
            .then(response => {
                return response.json()})
            .then(data => { 
                console.log('Success:', data[0]["key"]);
                return data})
            .catch((error) => { 
                console.error('Error:', error) })
    }

    getData(){
        console.log(this.characters)
        return this.characters;
    }
}

export default ApiInfo;