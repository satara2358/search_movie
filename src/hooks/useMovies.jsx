// ste código importa un archivo JSON, extrae ciertas propiedades del objeto dentro de ese JSON, 
// las transforma en un nuevo formato y devuelve un objeto con esa información transformada.

import respuestas from '../solicitudes/respuesta.json'

export function useMovies (){
  const movies = respuestas.Search // Esto asume que en el archivo JSON respuesta.json hay una 
  // propiedad llamada Search que contiene información sobre películas

  // El resultado de la función map() se asigna a la variable mappedMovies.
  const mappedMovies = movies?.map((umovie) => ({ // operador de encadenamiento opcional ?. 
    // para asegurarse de que movies no sea nulo ni indefinido antes de utilizar el método map()
    // iterar sobre cada elemento del arreglo. Por cada elemento, se crea un nuevo objeto con 
    // las propiedades id, title, year y poster
    id: umovie.imdbID,
    title: umovie.Title,
    year: umovie.Year,
    poster: umovie.Poster
  }))

  return { cmovie: mappedMovies }
  // se devuelve un objeto con una propiedad llamada cmovie que contiene el valor de mappedMovies. 
  // Permite que el resultado de la función useMovies sea utilizado en otros lugares del código.
}