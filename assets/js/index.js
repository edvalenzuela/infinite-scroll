import { cargaTendenciaGift } from "./tendencia.js";
import { getHistory } from "./buscador.js";
import { cargaGift } from "./buscador.js";


getHistory();
 
  const btnTextPadre = document.querySelector("#history_busqueda");

  btnTextPadre.addEventListener('click', (elemento) => {
    const re_busqueda = elemento.target.outerText
    cargaGift(re_busqueda)
  }) 

	document.addEventListener('DOMContentLoaded', cargaTendenciaGift);

