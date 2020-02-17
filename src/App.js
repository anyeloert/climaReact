import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario';
import Error from './components/Error';
import MostrarClima from './components/MostrarClima';

function App() {


  const [ciudad, guardarCiudad] = useState('')
  const [pais, guardarPais] = useState('')
  const [error, guardarError] = useState(false)
  const [resultadoB, guardarResultadoB] = useState({})

  const datosForm = datos => {
    if (datos.ciudad === '' || datos.pais === '' || datos.pais === 'Selecciona un país') {
      guardarError(true);
      return;
    }

    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais)
    guardarError(false);
  }

  let Component;
  if (error) {
    Component = <Error mensaje='Debe seleccionar ambas opciones'/>
  }else if (resultadoB.cod === '404'){
    Component = <Error mensaje = 'Ciudad no existe en nuestros registros'/>
  }else{
  Component = <MostrarClima 
                resultadoB = {resultadoB}
              />;
  }
  

  useEffect( () => {
    if (ciudad === '' || pais === ''){
      return;
    }
    const consultarApi = async () => {
      const idApp = 'b80bf3a99eeec3e329d5410ba2905d15';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${idApp}`
      
      const respuesta = await fetch(url);
      const resultado = await respuesta.json()
      console.log(resultado);
      guardarResultadoB(resultado)
    }

    consultarApi();
  }, [ciudad, pais]);


  return (
    <div>
      <Header
        titulo = 'Clima React App'
      />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col s12 m6 l6'>
              <Formulario 
              datosForm = {datosForm}
              />
            </div>
            <div className='col s12 m6 l6'>
              {Component}
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
