import React, { useState } from 'react'
import NavHeader from '../components/navs/NavHeader'
import Footers from '../components/Footer/Footers'
import { getUserLogin } from '../assets/js/Callbacks/APIGetUsers'
import ErroresFormulario from '../components/ErroresFormulario/ErroresFormulario'


const Login = () => {

    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [error, setError] = useState('')


    const eventLogin = async (e) => {
        e.preventDefault();
        localStorage.clear();
        var result = await getUserLogin(email, contrasena);

        const {mensajeError, codigoRespuesta, objetoRespuesta} = result.data;
        
        if (codigoRespuesta == 200) {
            setError('');
            localStorage.setItem("IdUser", objetoRespuesta[0].id);

            location.href = '/services';
        } else {
            setError(mensajeError);
        }
    }

    return (
        <div className='bg-black'>

            <NavHeader />
            <div className='flex items-center justify-center h-screen'>
                <div className='bg-stone-800 h-1/2 w-2/6 rounded-md md:p-5'>
                    {
                        (error != '')
                            ? <ErroresFormulario error={error} />
                            : ""
                    }
                    <div className='flex 300 h-1/5 justify-center items-center text-white'>
                        <p className='text-3xl'>
                            INICIAR SESIÓN
                        </p>
                    </div>
                    <div className='flex 400 h-1/5 justify-center items-center'>
                        <input type='email'
                            className='w-4/5 h-1/2 rounded-md p-2 border 
                            border-gray-300 bg-transparent px-4 py-2 
                            focus:outline-none focus:border-white text-white' placeholder='Correo electrónico'
                            onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className='flex 500 h-1/5 justify-center items-center'>
                        <input type='password'
                            className='w-4/5 h-1/2 rounded-md p-2 border 
                            border-gray-300 bg-transparent px-4 py-2 
                            focus:outline-none focus:border-white text-white' placeholder='Contraseña'
                            onChange={(e) => setContrasena(e.target.value)} value={contrasena} />
                    </div>
                    <div className='flex 600 h-1/5 justify-center'>
                        <button type='button'
                            className='w-4/5 h-1/2 border-black rounded-md
                        bg-gray-50 uppercase hover:bg-gray-200 transition '
                            onClick={(e) => eventLogin(e)}>Iniciar Sesión</button>
                    </div>
                    <div className='700 h-1/5 text-center text-white'>
                        <div>
                            <span className='hover:text-gray-500 text-xs'>
                                <a href='#'>¿OLVIDÓ SU CONTRASEÑA?</a>
                            </span>
                        </div>
                        <div>
                            <span className='hover:text-gray-500 text-xs'>
                                <a href='#'>¿TIENE UN STARLINK PERO SIN CUENTA? ACTÍVELO AQUÍ.</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footers verForm={false} />
        </div>
    )
}

export default Login
