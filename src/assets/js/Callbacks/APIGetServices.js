import { API } from './ConfigAPI';

export const getServices = async () => {
    return await API.get('/Servicios').then((result) => {
        return result
    }).catch((error) => {
        return error
    });
}

export const getPlansByServiceId = async (id) => {
    return await API.get('/Servicios/GetPlanesByServiceId/'+id).then((result) => {
        return result
    }).catch((error) => {
        return error
    });
}