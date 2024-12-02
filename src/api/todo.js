import axios from "axios";
import instance from "./interceptor";

// const instance = axios.create({
//     baseURL:"https://67495c19868020296630a7cd.mockapi.io/api/v1/",
//     timeout:100000
// });

export const getTodoList = async () =>{
    const response = await instance.get("/todo");
    return response.data;
}

export const addTodo = async (data)=>{
    const response = await instance.post("/todo",data);
    return response.data
}

export const deleteTodo = async (id) =>{
    const response = await instance.delete('/todo/'+id);
    return response.data
}

export const toggleTodo = async (data) =>{
    const response = await instance.put('/todo/'+data.id,data);
    return response.data
}

export const editTodo = async (data) =>{
    const response = await instance.put('/todo/'+data.id,data);
    return response.data
}

export default getTodoList
