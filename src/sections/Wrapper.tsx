import React from 'react'

const Wrapper = (Compnent: React.FC) => () => {
    return (
        <div className='content'>Wrapper
        <Compnent/> 
        </div>
    )
}


export default Wrapper