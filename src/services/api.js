import axios from 'axios';

// Criando instância do axios:

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;