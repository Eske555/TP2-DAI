let miUrl = null;
let miObjeto = null;

miUrl = 'error';

miObjeto = parsearUrl(miUrl);

console.log(miObjeto);


function parsearUrl(laURL) {
    try {
        const url = new URL(laURL);

        return {
            host: url.origin,
            pathname: url.pathname,
            protocolo: url.protocol,
            parametros: Object.fromEntries(url.searchParams)
        };

    } catch (error) {
        console.log("Error:", error.message);

        return {
            host: null,
            pathname: null,
            protocolo: null,
            parametros: null
        };

     
    }
}