
import {PI, sumar, restar, multiplicar, dividir, numerosTexto} from './modules/matematica.js';


let numero1=10; 
let numero2=20;

console.clear();

console.log(`La constante PI vale '${PI}'`);        //constante PI importada


let totalsuma = sumar(numero1, numero2);                      
let totalresta = restar(numero1, numero2);  
let totalmultiplicacion = multiplicar(numero1, numero2);                      
let totaldivision = dividir(numero1, numero2);                      


console.log(`sumar(${numero1}, ${numero2}) =  ${totalsuma}`);
console.log(`restar(${numero1}, ${numero2}) =  ${totalresta}`);
console.log(`multiplicar(${numero1}, ${numero2}) =  ${totalmultiplicacion}`);
console.log(`dividir(${numero1}, ${numero2}) =  ${totaldivision}`);
console.log(`${numerosTexto}`);
