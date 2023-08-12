import React, { useState } from 'react'
import FormularioRegister from '../components/Forms/FormularioRegister'

const Register = () => {
    
    const validaAccesoUsuario = (usuario) => {
        if(usuario.id != undefined && usuario.id > 0)
            localStorage.setItem("idUser", usuario.id);
    } 

    return (
        <>
            <FormularioRegister validaAccesoUsuario={validaAccesoUsuario}/>
        </>
    )
}

export default Register
