let miUrl = null;
let miObjeto = null;

miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';

miObjeto = parsearUrl(miUrl);

console.log(miObjeto);

function parsearUrl(laURL) {
    const url = new URL(laURL); // CONVIERTO LA URL DE STRING A UNA URL SEPARADA UTILIZABLE

    console.log("{");
    console.log(`host: '${url.origin}',`);
    console.log(`pathname: '${url.pathname}',`);
    console.log(`protocolo: '${url.protocol}',`);
    console.log("parametros:", Object.fromEntries(url.searchParams));
    console.log("}");

    return {
        host: url.origin,
        pathname: url.pathname,
        protocolo: url.protocol,
        parametros: Object.fromEntries(url.searchParams)
    };
}

