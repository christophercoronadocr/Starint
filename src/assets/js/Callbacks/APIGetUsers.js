import { API } from './ConfigAPI';

export const getUsers = async () => {
    return await API.get('/Clientes').then((result) => {
        return result
    }).catch((error) => {
        return error
    });
}

export const getUserById = async (id) => {
    return await API.get('/Clientes/' + id).then((result) => {
        return result
    }).catch((error) => {
        return error
    });
}

export const getUserLogin = async (email, contrasena) => {

    const usuario = {
        Id: 0,
        Nombre: "a",
        Apellido: "a",
        DNI: "a",
        Telefono: "a",
        Pais: "",
        FechaNacimiento: new Date("1995-12-17T03:24:00"),
        Email: email,
        Contrasena: contrasena,
        Estado: true
    }

    return await API.post('/Clientes/GetClienteByEmailContrasena',usuario).then((result) => {
        return result
    }).catch((error) => {
        return error
    });
}

export const getSubscriptionsByIdCliente = async (id) => {
    return await API.get('/Servicios/GetSubscriptions/' + id).then((result) => {
        return result
    }).catch((error) => {
        return error
    });
}