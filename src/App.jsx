import { useEffect } from 'react' 
import './App.css'
import useFetch from './hooks/useFetch'
import UsersList from './components/UsersList'

function App() {

  const baseUrl = "https://prueba-crud-sbtr.onrender.com/"
  const [ users, getUsers, createUsers, deleteUsers, updateUsers ] = useFetch(baseUrl)
  const [ departamentos, getDepartamentos ] = useFetch(baseUrl);
  const [ cargos, getCargos ] = useFetch(baseUrl)

  useEffect(() => {
    getUsers('/users')
  }, [])
  useEffect(() => {
    getDepartamentos('/departamentos')
  }, [])
  useEffect(() => {
    getCargos('/cargos')
  }, [])

  console.log(users)

  return (
    <div>
      <h1>Administración de Usuarios</h1>

      <select name="" id="">
        {departamentos?.map(departmento => (

          <option>{departmento.nombre}</option>
        ))}
      </select>
      
      <select name="" id="">
        {cargos?.map(cargo => (

          <option>{cargo.nombre}</option>
        ))}
      </select>


      <UsersList users={users}/>
    </div>
      
  )
}

export default App
