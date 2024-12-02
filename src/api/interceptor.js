import axios from "axios";

const instance = axios.create({
    baseURL:"https://67495c19868020296630a7cd.mockapi.io/api/v1/",
    timeout:100000
});

instance.interceptors.request.use(

    (config) => {
        console.log("Request", config);
        //calculate request time
        config.metadata = {startTime: new Date()};
        return config;
    },

    (error) => {

        console.error("Request Error", error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use (
    (response) => {
        console.log("Response",response);
        //calculate response time
        response.config.metadata.endTime = new Date();
        response.duration = response.config.metadata.endTime - response.config.metadata.startTime
        console.log(`URL ${response.config.url}  method: ${response.config.method} time: ${response.duration}`)
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 404) {
            window.location.href="*"
        }
        console.error("Response Error", error);
        return Promise.reject(error)
    }

)

export default instance