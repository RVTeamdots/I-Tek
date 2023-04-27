import axios from 'axios';
import { API_BASE_URL,BACKEND_API_BASE_URL } from '../constants';

export const Login = async (data) => { 
    try{
        const response = await axios.post(`${BACKEND_API_BASE_URL}/auth/login`, data, {headers:{"Content-Type":"application/json"}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    } catch(err){
        return Promise.reject(err);
    }
};
export const Register = async (data) => { console.log("data" ,data);
    try{
        const response = await axios.post(`${API_BASE_URL}/user`, data, {headers:{"Content-Type":"application/json"}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    }
    catch(err){
        return Promise.reject(err)
    }
};
export const ForgotPassword = async (data) => { console.log("data", data);
    try{
        const response = await axios.post(`${API_BASE_URL}/auth/forgot-password`, data, {headers:{"Content-Type":"application/json"}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    } catch(err){
        return Promise.reject(err);
    }
};
export const ResetPassword = async (data) => { console.log("data", data);
    try{
        const response = await axios.post(`${API_BASE_URL}/auth/reset-password`, data, {headers:{"Content-Type":"application/json"}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    } catch(err){
        return Promise.reject(err);
    }
};