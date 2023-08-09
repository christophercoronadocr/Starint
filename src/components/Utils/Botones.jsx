import React from 'react'

const Botones = ({ botones }) => {
    return (
        <>
            <button type="button" className='bg-indigo-500 rounded-md w-1/3 h-1/6 bg-transparent font-bold uppercase border border-slate-200 hover:bg-gray-950 mr-4'>{botones.titulo}</button>
        </>
    )
}

export default Botones
