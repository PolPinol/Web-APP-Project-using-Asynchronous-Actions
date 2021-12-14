/**
 * Code controller of index page
 *
 * @author: Inés Graells - Pol Piñol - Alexia Cabrera
 */

 class ApiInfo{
    constructor(){
        this.names = loadNames();
    }

    getNames(){
        console.log(this.names)
        return this.names;
    }
}

async function loadNames() {
    const response = await fetch('http://localhost:3000/api/list?search=');
    const names = await response.json().then(names => {return names});
    console.log(names);
    // logs [{ name: 'Joker'}, { name: 'Batman' }]
}

export default ApiInfo;