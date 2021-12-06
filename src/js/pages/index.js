/**
 * Code controller of index page
 *
 * @author: Inés Graells - Pol Piñol - Alexia Cabrera
 */

import ApiInfo from "../components/api";

const api = new ApiInfo();
api.saveData();
var data = api.getData();

console.log(data);