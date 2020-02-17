import React from 'react';

const Error = ({mensaje}) => {
    return (
        <div className='card-panel red accent-4'>
            {mensaje}
        </div>
    );
};

export default Error;