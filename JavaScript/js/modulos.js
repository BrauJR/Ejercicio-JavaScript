// Importación de Módulos
import saludar,{Saludar, PI,usuario} from "./constantes.js"
import {aritmetica as calculo} from "./aritmetica.js"

console.log("Archivo módulos.js")
console.log(PI, usuario)
// console.log(aritmetica.sumar(10, 1))
console.log(calculo.sumar(10, 1))
console.log(calculo.restar(10, 1))

// Funcion saludar()
saludar()

// Clase Saludar()
let saludo = new Saludar()
saludo
