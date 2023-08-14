import { API } from './ConfigAPI';

export const getServices = async () => {
    return await API.get('/Servicios').then((result) => {
        return result
    }).catch((error) => {
        return error
    });
}

export const getPlansByServiceId = async (id) => {
    return await API.get('/Servicios/GetDetailsPlanByIdServicio/'+id).then((result) => {
        return result
    }).catch((error) => {
        return error
    });
}

export const createASubscription = async (IdPlan, IdCliente) => {
    return await API.post('/Servicios/'+IdPlan+"/"+IdCliente).then((result) => {
        return result
    }).catch((error) => {
        return error
    });
}