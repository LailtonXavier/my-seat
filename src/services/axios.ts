import axios from 'axios';

export default axios.create({
  baseURL: 'https://apidisphelpostgres-production.up.railway.app',
});
