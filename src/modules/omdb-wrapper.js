import axios from "axios";

const APIKEY = "928dae35";

const OMDBSearchByPage = async (textoBusqueda, pagina = 1) => {

  const resultado = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };

  try {
    const endpoint = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${textoBusqueda}&page=${pagina}`;
    const { data } = await axios.get(endpoint);

    if (data.Response === "True") {
      resultado.respuesta = true;
      resultado.cantidadTotal = parseInt(data.totalResults);
      resultado.datos = data.Search;
    }

  } catch {
  }

  return resultado;
};


const OMDBSearchComplete = async (textoBusqueda) => {

  const resultado = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };

  try {
    const primeraPagina = await OMDBSearchByPage(textoBusqueda);

    if (!primeraPagina.respuesta) return resultado;

    resultado.respuesta = true;
    resultado.cantidadTotal = primeraPagina.cantidadTotal;
    resultado.datos = [...primeraPagina.datos];

    const paginasTotales = Math.ceil(primeraPagina.cantidadTotal / 10);

    let paginaActual = 2;

    while (paginaActual <= paginasTotales) {
      const infoPagina = await OMDBSearchByPage(textoBusqueda, paginaActual);

      if (infoPagina.datos.length > 0) {
        resultado.datos.push(...infoPagina.datos);
      }

      paginaActual++;
    }

  } catch {
  }

  return resultado;
};


const OMDBGetByImdbID = async (id) => {

  const resultado = {
    respuesta: false,
    cantidadTotal: 0,
    datos: {}
  };

  try {
    const endpoint = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${id}`;
    const { data } = await axios.get(endpoint);

    if (data.Response === "True") {
      resultado.respuesta = true;
      resultado.cantidadTotal = 1;
      resultado.datos = data;
    }

  } catch {
  }

  return resultado;
};


export {
  OMDBSearchByPage,
  OMDBSearchComplete,
  OMDBGetByImdbID
};