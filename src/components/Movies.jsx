// una prop llamada mvies, que es un arreglo de películas. Renderiza una lista desordenada (<ul>) 
// y utiliza el método map() para iterar sobre cada elemento del arreglo mvies. Por cada película, 
// se renderiza un elemento de lista (<li>) con el atributo key establecido como movie.id. Dentro 
// de cada elemento de lista, se muestra el título de la película (<h3>), el año de lanzamiento 
// (<p>) y una imagen del póster de la película (<img>).

function LisOfMovies ({ mvies }) {
  return(
    <ul className="movies">
      {
        mvies.map(movie => (
          <li className="movie" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoResults () {
  return(
    <p>vacio su busqueda</p>
  )
}

// El componente Movies renderiza condicionalmente el componente ListOfMovies si hasMovies es 
// verdadero, pasándole el arreglo de películas (moviess) como la prop mvies. Si hasMovies es 
// falso, se renderiza el componente NoResults.
export function Movies ({ moviess }) {
  // moviess, que es un arreglo de películas obtenido desde el componente App
  // hasMovies que verifica si moviess no es nulo y tiene una longitud mayor a cero.
  const hasMovies = moviess?.length > 0 
  return(
    hasMovies
      ? <LisOfMovies mvies={ moviess } />
      : <NoResults />
  )
}