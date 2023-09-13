
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Search from './components/Buscador'
import List from './components/Listado'
import DocumentForm from './components/Formulario'
import Alert from './components/Alert'
import { BaseColaboradores } from './assets/BaseColaboradores'
import { useState } from 'react';

function App() {

  const [allCollaborators, setAllCollaborator] = useState (BaseColaboradores);
  const [nextId, setNextId] = useState (4); 
  const [alert, setAlert] = useState ({error:"", message:"", color:""});
  const [search, setSearch] = useState ("");

  const searchHandle = (evento) => {

      setSearch(evento.target.value.trim())
  }
 
  const filterList = allCollaborators.filter((collaborator) =>{
    if
    (
      collaborator.nombre.toLowerCase().includes(search.toLowerCase()) ||
      collaborator.correo.toLowerCase().includes(search.toLowerCase()) ||
      collaborator.edad.toLowerCase().includes(search.toLowerCase()) ||
      collaborator.cargo.toLowerCase().includes(search.toLowerCase()) ||
      collaborator.telefono.toLowerCase().includes(search.toLowerCase())
    )
      {
        return true;
      }
      return false;
  }
  );

  const addCollaborator = (newCollaborator) =>{
    const collaboratorNew = {
      ...newCollaborator,
      id: nextId
    
    };
    setAllCollaborator([...allCollaborators,newCollaborator])
    setNextId(nextId + 1);
    

  }

  console.log(nextId)
  return (
    <>
    <div className='container-fluid'>

    <Search buscar={search} searchHandle={searchHandle}></Search>
    <List collaboratorList={filterList}></List>
    <DocumentForm onSubmit={addCollaborator} setAlert={setAlert}></DocumentForm>
 
    {alert.message && <Alert color={alert.color}>{alert.message}</Alert>}

    </div>
    
    </>
  )
}

export default App
