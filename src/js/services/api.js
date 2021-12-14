export default class Api {
  execute() {
    return fetch(
      `http://localhost:3000/api/list?search=`
    ).then((response) => response.json());
  }
}