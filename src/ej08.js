import {
  OMDBSearchByPage,
  OMDBSearchComplete,
  OMDBGetByImdbID
} from "./modules/omdb-wrapper.js";

let resultado;

resultado = await OMDBSearchByPage("cars", 1);
console.log("SearchByPage:", resultado);

resultado = await OMDBSearchComplete("cars");
console.log("SearchComplete:", resultado);

resultado = await OMDBGetByImdbID("tt0317219");
console.log("GetByID:", resultado);