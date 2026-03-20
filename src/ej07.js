import { getCountry, getCurrency } from 'currency-map-country';

let monedaDelPais, codigoPais;

codigoPais = 'AR';

monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);


codigoPais = 'UZA';

monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais) {
    try {
        const pais = getCountry(codigoPais);

        if (!pais) return null;

        const moneda = getCurrency(pais);

        return moneda || null;

    } catch (error) {
        return null;
    }
}