import axios from "axios";


const instance = axios.create({
    baseURL:"https://67495c19868020296630a7cd.mockapi.io/api/v1/",
    timeout:100000
});

export const getTodoList = async () =>{
    const response = await instance.get("/todo");
    return response.data;
}

export const addTodo = async (data)=>{
    const response = await instance.post("/todo",data);
    return response.data
}


export default getTodoList
