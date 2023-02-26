export const PI = Math.PI

export let usuario = "Brau"
const password = "12345"
// export default password

// Función expresada. Las que se guardan en variable
const hello = () => console.log("HOLA")

// Función definida. Se puede llamar antes de la función
export default function saludar() {
    console.log("Hola Módulos +ES6")
}

// CLASE
export class Saludar{
    constructor() {
        console.log("Hola Módulos")
    }
}


/*
EXPORT DEFAULT.
 Si es "constante o variable" primero declaramo y luego enviamos
    const password = "12345"
    export default password
 Si es "clase o function" se puede enviar directamente
    export default class Saludar{
    constructor() {
        console.log("Hola Módulos")
    }    
*/