import fs from 'fs';

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";

console.clear();

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino) {
    try {
        const contenido = fs.readFileSync(origen, 'utf-8'); // UTF8 PARA CODIFICACION DE CARACTERES 

        fs.writeFileSync(destino, contenido);
        // REESCRIBO EL CONTENIDO DEL ARCHIVO 1 EN EL DESTINO (ARCHIVO 2)
        console.log("----------------------------------------------------------");
        console.log("Archivo copiado correctamente ✅");
        console.log("----------------------------------------------------------");
    } catch (error) {
        console.log("----------------------------------------------------------");
        console.log("Error al copiar el archivo ❌");
        console.log("----------------------------------------------------------");
        console.error(error.message);
    }
}