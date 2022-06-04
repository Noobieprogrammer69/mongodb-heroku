// import axios from 'axios';
import { axiosInstance } from './axios';

export const getDataApi = async (url, token) =>{
    const res = await axiosInstance.get(`/api/${url}`,{
        headers : {Authorization : token}
    })
    return res;
}

export const postDataApi =async (url, post, token) => {
   
    const res = await axiosInstance.post(`/api/${url}`, post ,{
        headers: {Authorization: token}

    })
    
    return res;
    
}

export const putDataApi = async (url , post, token) => {
    const res = await axiosInstance.put(`/api/${url}`,post,{
        headers :{Authorization: token}
    })
    return res;
}
export const patchDataApi = async (url , post, token) => {
    const res = await axiosInstance.patch(`/api/${url}`, post , {
        headers :{Authorization: token}
    })
    return res;
}
export const deleteDataApi = async (url , token) => {
    const res = await axiosInstance.delete(`/api/${url}`,{
        headers :{Authorization: token}
    })
    return res;
}