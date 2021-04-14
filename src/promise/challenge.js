/*
    - Hacer una petición a nuestra API
    - Obtener cuantos elementos tiene de personajes

    - Acceder a el primer personaje 
    - Obtener la ubicación donde se encuentra
    - Saber en que dimensión se encuentra

    Ventajas
    - Facilmente enlazable (con then -> return -> then -> ...)
    - Gran capacidad de trabajar con asincronismo

    Desventajas
    - No maneja excepciones se realiza con un catch
    - Se debe tener cuidado con el retorno para siguientes llamados
    - Requiere un polyfill para funcionar en todos los navegadores
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