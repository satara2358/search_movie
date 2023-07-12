
import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies'

// f03c8b80
// http://www.omdbapi.com/?apikey=f03c8b80&s=batman

// Se declara el hook useSearch como una función. 
function useSearch (){
  const [search, updateSearch] = useState('')
  // const [search, updateSearch] = useState('') declara una variable de estado llamada search que 
  // almacena el valor de búsqueda y una función updateSearch que se utiliza para actualizar el 
  // estado de búsqueda. Inicialmente, el valor de búsqueda se establece en una cadena vacía.
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  
  useEffect(() => {
    if (isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }

    if (search === ''){
      setError('no se puede vacia')
      return
    }
    if (search.match(/^\d+$/)){
      setError('no numeros')
      return
    }
    if(search.length < 3){
      setError('menor a3 caracteres')
      return
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error }
  // En resumen, este hook useSearch se encarga de gestionar el estado de búsqueda, realizar 
  // validaciones y establecer el mensaje de error correspondiente en base al valor de búsqueda.
}

// representa la interfaz de usuario de la aplicación.
function App() {
  const { cmovie: mappedMovies } = useMovies() // desde Hooks 
  const { search, updateSearch, error } = useSearch()

  const handleSubmit = (event) => { // se ejcuta al enviar el formulario
    event.preventDefault()
    console.log({search})
  }

  // Si cambia el valor del campo de entrada de búsqueda. Esta función actualiza el estado de 
  // búsqueda llamando a updateSearch y pasándole el nuevo valor.
  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <label>
            <input 
              style={{
                border: '1px solid transparent',
                borderColor: error ? 'red' : 'transparent'
              }}
              onChange={handleChange} value={search} name='query' placeholder='cualquier cosa q describa la accion' type="text" />
            <button >Buscar</button>
          </label>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
        {/* se muestra un párrafo de error en caso de que exista un error. */}
      </header>

      <main>
      {/* Se pasa la prop moviess con el valor de mappedMovies. Esto permite renderizar las películas en la interfaz de usuario */}
        <Movies moviess={mappedMovies} />
        {/* props movviess es un arreglo de peliculas que viaja a Movies.jsx */}
      </main>
    </div>
  )
}

export default App
// En resumen al ingresar un término de búsqueda, manejar eventos de formulario y mostrar los 
// resultados de las películas obtenidas a través del hook  ==> useMovies.
