import { useEffect, useState } from 'react';

import './App.css'

function App() { 
  const [tarea, setTarea] = useState([]);

  const fetchTarea = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/tarea`)
      if (!response.ok){
        throw new Error ('Error al obtener los datos del servidor')
      }
      const data = await response.json()
      setTarea(data);
    }catch (error) {
      console.log ('Error al obtener las tareas')
    }
  };

  useEffect (()=> {
    fetchTarea();     
  }, []);
  return (
    <div className='container m-5'>
      <h1>Blog de Tareas</h1>
      
    </div>
  )
}

export default App;
