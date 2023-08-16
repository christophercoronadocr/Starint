import React, { useState } from 'react'
import { registerUser } from '../../assets/js/Callbacks/APIRegisterUser'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import ErroresAlert from '../ErroresFormulario/ErroresFormulario'


const FormularioRegister = ({ validaAccesoUsuario }) => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [DNI, setDNI] = useState("")
    const [telefono, setTelefono] = useState("")
    const [pais, setPais] = useState("")
    const [fechaNacimiento, setFechaNacimiento] = useState("")
    const [email, setEmail] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [Error, setError] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();

        const usuario = {
            id: 0,
            nombre,
            apellido,
            DNI,
            telefono,
            pais,
            fechaNacimiento,
            email,
            contrasena,
            estado: true
        };

        if ([nombre, apellido, DNI, telefono, pais, fechaNacimiento, email, contrasena].includes('')) {
            setError('Existe al menos 1 campo vacio');
            return;
        }

        const respuesta = await registerUser(usuario);

        if (respuesta.data.codigoRespuesta == 200) {
            setError('');
            validaAccesoUsuario(respuesta.data.objetoRespuesta[0]);
            location.href = "/Services";
        } else {
            setError(respuesta.data.mensajeError);
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='bg-cover bg-center w-full h-screen blur-lg absolute'
                style={{ backgroundImage: `url("https://fondosmil.com/fondo/17010.jpg")` }}>
            </div>
            <div className='sm:left-0 sm:w-full sm:top-10 lg:left-1/3 lg:w-1/3 z-10 absolute bg-cover bg-center text-center shadow-2xl rounded-md'
                style={{ backgroundImage: `url("https://fondosmil.com/fondo/17010.jpg")`}}>
                <div className=' py-6'>
                    <p className='text-bold text-white text-4xl'>
                        SIGN UP
                    </p>
                </div>
                {
                    (Error != '')
                        ? <ErroresAlert error={Error} />
                        : ""
                }
                <div className='mb-5'>
                    <input type="text" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 '
                        placeholder='Name' onChange={(e) => setNombre(e.target.value)} value={nombre} />
                </div>
                <div className='mb-5'>
                    <input type="text" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 '
                        placeholder='Lastname' onChange={(e) => setApellido(e.target.value)} value={apellido} />
                </div>
                <div className='mb-5'>
                    <input type="number" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 '
                        placeholder='DNI' onChange={(e) => setDNI(e.target.value)} value={DNI} />
                </div>
                <div className='mb-5'>
                    <input type="number" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 '
                        placeholder='Phone numbre' onChange={(e) => setTelefono(e.target.value)} value={telefono} />
                </div>
                <div className='mb-5'>
                    <input type="text" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 '
                        placeholder='Country' onChange={(e) => setPais(e.target.value)} value={pais} />
                </div>
                <div className='mb-5'>
                    <input type="date" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 '
                        placeholder='Birthdate' onChange={(e) => setFechaNacimiento(e.target.value)} value={fechaNacimiento} />
                </div>
                <div className='mb-5'>
                    <input type="email" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 '
                        placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className='mb-5'>
                    <input type="password" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 '
                        placeholder='Password' onChange={(e) => setContrasena(e.target.value)} value={contrasena} />
                </div>
                <div className='mb-5'>
                    <button type='submit' className='bg-green-700 hover:bg-green-500 text-white font-bold uppercase sm:w-4/5 md:mr-5 lg:w-1/3 p-4 rounded-md inline'>
                        <span className='text-xs'>Register</span>
                        </button>
                    <Link to={'/'}>
                        <button type='button' className='bg-red-700 hover:bg-red-500 text-white font-bold uppercase sm:w-4/5 md:mr-5 lg:w-1/3 p-4 rounded-md inline'>
                            <span className='text-xs'>Back</span>
                        </button>
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default FormularioRegister
