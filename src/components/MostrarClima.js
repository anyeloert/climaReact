import React from 'react';

const MostrarClima = ({resultadoB}) => {

    const {name, main} = resultadoB

    const kelvin = 273.15

    if (!name) return null;


    console.log(name + '' + (main.temp - kelvin));
    
    


   
    return (
        <div className='card-panel white col 12'>
            <div className ='black-text'>
                <h2>El clima de {name} es:</h2>
                <p className='temperatura'>
                    {parseInt(main.temp - kelvin, 10)} &#x2103;
                </p>
                <p>
                    La temperatura mínima fue de {parseInt(main.temp_min - kelvin, 10)} &#x2103;
                </p>
                <p>
                    La temperatura máxima fue de {parseInt(main.temp_max - kelvin, 10)} &#x2103;
                </p>
            </div>
        </div>
    );
};

export default MostrarClima;