import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://pokedex-react-api.herokuapp.com/pokemon'
    : 'http://localhost:3001/pokemon/';

const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
