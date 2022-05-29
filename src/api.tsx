import axios, { AxiosRequestHeaders } from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/api'

const authenticate = async () => {  
    try {
        const response =  await axios.post(`/authenticate`, { "username": "test", "password": "test"})     
        return {'Authorization':  `Bearer ${response.data.id_token}`};        
    } catch(e) {
        console.log(e);
        return 0;
    }
}

export const isUser = async () => {  
    
    try {
        const response =  await axios.get(`/isUser`)
        return response.data;
    } catch(e) {
        console.log(e);
        return 0;
    }      
  }

(async () => {
    axios.defaults.headers.common = await authenticate() as AxiosRequestHeaders;
})();

export const isAdmin = async () => {
    try {
        const response =  await axios.get(`/isAdmin`)
        return response.data;
    } catch(e) {
        console.log(e);
        return 0;
    }      
} 

export const getClientInfo = async () => {
    try {
        const response =  await axios.get(`/informationsClient`);
        return response.data;  
    } catch(e) {
        console.log(e);
        return 0;
    }
}
