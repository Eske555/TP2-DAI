import { getCountryByAbbreviation, getCurrencyAbbreviation } from "country-currency-map";

let codigo, moneda;

codigo = 'AR';
moneda = obtenerCodigoMoneda(codigo);
console.log(`La moneda del país ${codigo} es: ${moneda}`);

codigo = 'UZA';
moneda = obtenerCodigoMoneda(codigo);
console.log(`La moneda del país ${codigo} es: ${moneda}`);

function obtenerCodigoMoneda(paisCod) {
  try {
    const pais = getCountryByAbbreviation(paisCod);

    if (!pais) return null;

    const monedaPais = getCurrencyAbbreviation(pais);

    return monedaPais ? monedaPais : null;

  } catch {
    return null;
  }
}