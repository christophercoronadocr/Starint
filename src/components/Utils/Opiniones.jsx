import React from 'react'

const Opiniones = ({ comentario, autor }) => {
    return (
        <>
            <div className="text-right font-serif">
                <p className='text-white font-bold text-2xl text-center md:px-10'>
                    <cite>
                        {comentario}
                    </cite>
                    <br />
                    <span className='italic'>
                        {autor}
                    </span>
                </p>
            </div>
        </>
    )
}

export default Opiniones
