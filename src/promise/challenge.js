/*
    - Hacer una petición a nuestra API
    - Obtener cuantos elementos tiene de personajes

    - Acceder a el primer personaje 
    - Obtener la ubicación donde se encuentra
    - Saber en que dimensión se encuentra
*/

const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url);
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(error => console.error(error));