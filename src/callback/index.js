/* 
    Event Loop
    Manejador de eventos

    Asincronismo
    Acción que no ocurre al mismo tiempo

    Memory heap
    Espacio en memoria compartido para toda nuestra aplicación

    Call Stack(Pila de ejecución)
    Las funciones son puestas en ejecución

    Callback Queue(Cola de tareas)
    Almacena callback de funciones hasta que la pila de ejecución este 
    libre

    Callback
    practicamente es una función que al crear la le pasamos como 
    parámetro una segunda función y de esta forma, al momento de hacer 
    una petición o algún llamado asíncrono, estas ejecuta después de 
    este llamado
*/

function suma(num1, num2) {
    return num1 + num2;
}

function calcular(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calcular(2, 2, suma));

function date(callback) {

    console.log(new Date);

    setTimeout(function() {
        let date = new Date;
        callback(date);
    }, 3000);

}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);