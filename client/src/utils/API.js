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
        return axios.get('/sobjects/account')
    },
    getSalesforceRecord: (centerId) => {
        return axios.get("/ui-api/record-ui/" + centerId)
    },
    findSalesforceUrl:  (findCenter) => {
        return axios.get("/api/salesforce/findCenter", findCenter)
    },
    pullCenterData: (centerId) => {
        return axios.get("/services/data/v44.0/sobjects/Account/" + centerId)
    },
    createSurvey: (surveydata) => {
        return axios.post("/api/survey", surveydata);
    },

}