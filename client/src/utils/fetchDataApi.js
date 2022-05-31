import axios from './axios';

export const getDataApi = async (url, token) =>{
    const res = await axios.get(`https://mongodb-newsapi.herokuapp.com/api/${url}`,{
        headers : {Authorization : token}
    })
    return res;
}

export const postDataApi =async (url, post, token) => {
   
    const res = await axios.post(`https://mongodb-newsapi.herokuapp.com/api/${url}`, post ,{
        headers: {Authorization: token}

    })
    
    return res;
    
}

export const putDataApi = async (url , post, token) => {
    const res = await axios.put(`https://mongodb-newsapi.herokuapp.com/api/${url}`,post,{
        headers :{Authorization: token}
    })
    return res;
}
export const patchDataApi = async (url , post, token) => {
    const res = await axios.patch(`https://mongodb-newsapi.herokuapp.com/api/${url}`, post , {
        headers :{Authorization: token}
    })
    return res;
}
export const deleteDataApi = async (url , token) => {
    const res = await axios.delete(`https://mongodb-newsapi.herokuapp.com/api/${url}`,{
        headers :{Authorization: token}
    })
    return res;
}