import axios from 'axios';

export default {
    createUser: (userdata) => {
        return axios.post("/api/user", userdata);
    },
    getUser: (id) => {
        return axios.get("/api/user/" + id);
    }
}