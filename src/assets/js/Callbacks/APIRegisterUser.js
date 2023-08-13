import { API } from './ConfigAPI';

export const registerUser = async (usuario) => {
 return await API.post('/Clientes', usuario).then((result) => {
      return  result
    }).catch((error) => {
       return error
    });
}
