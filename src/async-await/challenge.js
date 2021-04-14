/*
    - Hacer una petición a nuestra API
    - Obtener cuantos elementos tiene de personajes

    - Acceder a el primer personaje 
    - Obtener la ubicación donde se encuentra
    - Saber en que dimensión se encuentra

    Ventajas
    - try/catch -> manejo de excepcion
    - Son más faciles de leer y se tiene mayor entendimiento

    Desventajas
    - Debemos de esperar a que se realicen todas las peticiones
    - Requiere un polyfill para funcionar en todos los navegadores
*/

const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${url_api}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    } catch (error) {
        console.error(error);
    }
};

console.log('Before');
anotherFunction(API);
console.log('After');