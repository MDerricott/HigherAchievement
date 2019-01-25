import axios from 'axios';

export default {
    createUser: (userdata) => {
        return axios.post("/api/users", userdata);
    },
    getUser: (userData) => {
        return axios.get("/api/users", userData);
    },
    getCenter: (centerName) => {
        return axios.get("/api/center/" + centerName)
    },
    getAllUsers: () => {
        return axios.get("/api/users")
    },
    getSalesforce: () => {
        return axios.get('/services/data/v44.0')
    }
}