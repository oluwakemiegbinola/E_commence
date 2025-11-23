import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:5000', // Android emulator
  // or baseURL: 'http://192.168.x.x:5000' for real device
  timeout: 10000,
});

export default api;
