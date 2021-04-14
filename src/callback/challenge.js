/*
    - Hacer una petición a nuestra API
    - Obtener cuantos elementos tiene de personajes

    - Acceder a el primer personaje 
    - Obtener la ubicación donde se encuentra
    - Saber en que dimensión se encuentra

    Ventaja
    - Es simple facil de implementar
    - Son universales, corren en cualquier navegador

    Desventajas
    - La composición suele ser tosca y generar callback hell
    - Se vuelve dificil de leer conforme cresca en anidamiento
    - Flujo poco intuitivo
    - Tedioso en el manedo de errores
*/

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url_api, true);

    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }

    xhttp.send();
}

// Se generará un Callback hell
fetchData(API, function(error1, data1) {
    if (error1) return console.error(erro1);
    fetchData(API + data1.results[0].id, function(error2, data2) {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});