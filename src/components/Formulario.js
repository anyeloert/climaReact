import React, {useState} from 'react';

const Formulario = ({datosForm}) => {

    const [busqueda, guardarBusqueda] = useState({
        ciudad : '',
        pais : ''
    })

    const handleChange = e =>{
        guardarBusqueda ({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const consultarClima = e => {
        e.preventDefault();
        //console.log("hola");
        datosForm(busqueda)
    }


    return (
        <form 
            onSubmit={consultarClima}
        >
            <div className='input-field col s12'>
                <input type='text' placeholder='Ejemplo: Lima' id='ciudad' name='ciudad' onChange={handleChange} />
                <label htmlFor='ciudad'> Ciudad </label>
            </div>
            <div className="input-field col s12">
                <select name='pais' onChange={handleChange} id='pais'>
                    <option value=""  >Selecciona un país</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="VE">Venezuela</option>
                </select>
                <label htmlFor='pais'>País</label>
            </div>
            <div className='input-field col s12'>
                <input  type='submit' className="waves-effect waves-light btn btn-large yellow btn-block accent-4"
                value='Buscar Clima' />
            </div>
        </form>
    );
};

export default Formulario;