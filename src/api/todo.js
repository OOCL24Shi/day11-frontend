import axios from "axios";


const instance = axios.create({
    baseURL:"https://67495c19868020296630a7cd.mockapi.io/api/v1/",
    timeout:5000
});

const getTodoList = async () =>{
    const response = await instance.get("/todo/id");
    return response.data;
}

export default getTodoList;