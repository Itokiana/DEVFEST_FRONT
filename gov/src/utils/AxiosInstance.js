import axios from 'axios'
// Create instance called instance
const AxiosInstance = axios.create({
  baseURL: "http://localhost:4000" 
})

export default AxiosInstance;