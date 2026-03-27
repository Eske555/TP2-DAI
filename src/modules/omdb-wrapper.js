import axios from "axios";

const APIKEY = "928dae35"; 

const OMDBSearchByPage = async (searchText, page = 1) => {

  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };

  try {
    const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
    const response = await axios.get(url);

    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = Number(response.data.totalResults);
      returnObject.datos = response.data.Search;
    }

  } catch {
  }

  return returnObject;
};


const OMDBSearchComplete = async (searchText) => {

  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };

  try {
    const firstCall = await OMDBSearchByPage(searchText, 1);

    if (!firstCall.respuesta) return returnObject;

    returnObject.respuesta = true;
    returnObject.cantidadTotal = firstCall.cantidadTotal;
    returnObject.datos = [...firstCall.datos];

    const totalPages = Math.ceil(firstCall.cantidadTotal / 10);

    for (let i = 2; i <= totalPages; i++) {
      const pageData = await OMDBSearchByPage(searchText, i);
      returnObject.datos.push(...pageData.datos);
    }

  } catch {
    returnObject.respuesta = false;
  }

  return returnObject;
};


const OMDBGetByImdbID = async (imdbID) => {

  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: {}
  };

  try {
    const url = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;
    const response = await axios.get(url);

    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = 1;
      returnObject.datos = response.data;
    }

  } catch {
    returnObject.respuesta = false;
  }

  return returnObject;
};


export {
  OMDBSearchByPage,
  OMDBSearchComplete,
  OMDBGetByImdbID
};