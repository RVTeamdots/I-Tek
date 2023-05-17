import axios from 'axios';
import { API_BASE_URL, BACKEND_API_BASE_URL } from '../constants';
import { JWT } from '../shared';

export const getDashboard = async () => { 
    try{
        const response = await axios.get(`${API_BASE_URL}/admin/dashboard`, {headers:{"Content-Type":"application/json", "Authorization":"Bearer "+JWT.getJwt()}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    } catch(err){
        return Promise.reject(err);
    }   

};

export const getAllCases = async () => {  
    try{
        const response = await axios.get(`${BACKEND_API_BASE_URL}/user/view-all-cases`, {headers:{"Content-Type":"application/json", "Authorization":"Bearer "+JWT.getJwt()}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    } catch(err){
        return Promise.reject(err);
    };

};


export const getAllCrime = async () => {  
    try{
        const response = await axios.get(`${BACKEND_API_BASE_URL}/crime/view-all-crime`, {headers:{"Content-Type":"application/json", "Authorization":"Bearer "+JWT.getJwt()}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    } catch(err){
        return Promise.reject(err);
    };

};


export const getMe = async () =>{
    try{
        const response = await axios.get(`${BACKEND_API_BASE_URL}/user/getme`, {headers:{"Content-Type":"application/json", "Authorization":"Bearer "+JWT.getJwt()}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    } catch(err){
        return Promise.reject(err);
    };
}

export const getAllAgencies = async () => {   
    try{ 
        const response = await axios.get(`${BACKEND_API_BASE_URL}/agency/view-all-agency`, {headers:{"Content-Type":"application/json", "Authorization":"Bearer "+JWT.getJwt()}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    } catch(err){
        return Promise.reject(err);
    };

};



