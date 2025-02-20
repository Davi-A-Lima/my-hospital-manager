import axios from 'axios';

// Instância do Axios com a URL base do backend
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Verifique se a URL está correta
});

export default api;