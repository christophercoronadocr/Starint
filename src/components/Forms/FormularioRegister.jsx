import React, { useState } from 'react'
import { registerUser, getUsers } from '../../assets/js/Callbacks/APIRegisterUser'
import axios from 'axios'
import ErroresFormulario from '../ErroresFormulario/ErroresFormulario'


const FormularioRegister = ({ setUsuario }) => {
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

        const respuesta = await registerUser(usuario)

        if (respuesta.status == 200) {
            setError('');
            location.href = "/";
        } else {
            setError(respuesta.data);
            console.log(respuesta);
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='bg-cover bg-center w-full h-screen blur-lg absolute'
                style={{ backgroundImage: `url("https://fondosmil.com/fondo/17010.jpg")` }}>
            </div>
            <div className='left-1/3 w-1/3 z-10 absolute bg-cover bg-center text-center shadow-2xl rounded-md'
                style={{ backgroundImage: `url("https://fondosmil.com/fondo/17010.jpg")`, top: '5%', height: '85%' }}>
                <div className=' py-6'>
                    <p className='text-bold text-white text-4xl'>
                        SIGN UP
                    </p>
                </div>
                {
                    (Error != '')
                        ? <ErroresFormulario error={Error} />
                        : ""
                }
                <div className='mb-5'>
                    <input type="text" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 text-white'
                        placeholder='Ingrese su nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} />
                </div>
                <div className='mb-5'>
                    <input type="text" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 text-white'
                        placeholder='Ingrese su apellido' onChange={(e) => setApellido(e.target.value)} value={apellido} />
                </div>
                <div className='mb-5'>
                    <input type="number" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 text-white'
                        placeholder='Ingrese su DNI' onChange={(e) => setDNI(e.target.value)} value={DNI} />
                </div>
                <div className='mb-5'>
                    <input type="number" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 text-white'
                        placeholder='Ingrese su telefono' onChange={(e) => setTelefono(e.target.value)} value={telefono} />
                </div>
                <div className='mb-5'>
                    <input type="text" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 text-white'
                        placeholder='Ingrese su país' onChange={(e) => setPais(e.target.value)} value={pais} />
                </div>
                <div className='mb-5'>
                    <input type="date" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 text-white'
                        placeholder='Ingrese su fecha de nacimiento' onChange={(e) => setFechaNacimiento(e.target.value)} value={fechaNacimiento} />
                </div>
                <div className='mb-5'>
                    <input type="email" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 text-white'
                        placeholder='Ingrese su email' onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className='mb-5'>
                    <input type="password" className='w-4/5 p-4 rounded-md hover:border-gray-300 bg-slate-600 font-bold opacity-90 text-white'
                        placeholder='Ingrese su contraseña' onChange={(e) => setContrasena(e.target.value)} value={contrasena} />
                </div>
                <div className='mb-5'>
                    <button type='submit' className='bg-indigo-700 text-white font-bold uppercase w-4/5 p-4 rounded-md'>Register</button>
                </div>
            </div>
        </form>
    )
}

export default FormularioRegister
