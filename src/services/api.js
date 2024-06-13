import axios from 'axios';

const api = axios.create({
    /**
     * Alterar o IP da API de acordo com IP da máquina onde está sendo executada
     */
    baseURL: 'http://192.168.4.121'
});

export default api;