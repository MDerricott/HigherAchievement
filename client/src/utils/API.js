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
    }
}