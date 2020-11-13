import axios from "axios";

const instance = axios.create({
    baseURL: 'https://scalable-commerce-backend.herokuapp.com/api/v1',
});

export default instance