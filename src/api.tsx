import axios, { AxiosRequestHeaders } from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/api'


export const getClientInfo = async () => {
    try {
        const response =  await axios.get(`/informationsClient`);
        return response.data;  
    } catch(e) {
        console.log(e);
        return 0;
    }
}
