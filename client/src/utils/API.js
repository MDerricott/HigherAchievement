import axios from 'axios';

export default {
    createUser: (userdata) => {
        return axios.post("/api/users", userdata);
    },
    getUser: (id) => {
        return axios.get("/api/users/" + id);
    },
    getCenter: (id) => {
        return axios.get("/api/center/" + id)
    }
}