import {
  OMDBSearchByPage,
  OMDBSearchComplete,
  OMDBGetByImdbID
} from "./modules/omdb-wrapper.js";

let muestra;

muestra = await OMDBSearchByPage("cars", 1);
console.log("SearchByPage:", muestra);

muestra = await OMDBSearchComplete("cars");
console.log("SearchComplete:", muestra);

muestra = await OMDBGetByImdbID("tt0317219");
console.log("GetByID:", muestra);