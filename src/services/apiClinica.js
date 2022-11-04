import axios from "axios";

const apiClinica = axios.create({
    baseURL: 'http://10.107.144.15:3000'
});

export default apiClinica;