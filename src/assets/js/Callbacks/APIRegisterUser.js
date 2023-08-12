import { API } from './ConfigAPI';

export const registerUser = async (usuario) => {
 return await API.post('/Clientes', usuario).then((result) => {
      return  result
    }).catch((error) => {
       return error
    });
}

export const getUsers = async () => {
   return await API.get('/Clientes').then((result) => {
        return  result
      }).catch((error) => {
         return error
      });
  }
  
  export const getUserById = async (id) => {
   return await API.get('/Clientes/'+id).then((result) => {
        return  result
      }).catch((error) => {
         return error
      });
  }
  