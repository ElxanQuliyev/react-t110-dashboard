import axios from "axios";
import {LOGIN_USER_REQUEST, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../Constants/UserConstants";
import {BASE_URL} from "../../api/BaseConfig";
export const loginAction = (email,password)=>async(dispatch)=>{
    try {
        dispatch({type:LOGIN_USER_REQUEST})
        const {data}= await axios.post(`${BASE_URL}/account/login`,{email,password})       
        dispatch({
            type:LOGIN_USER_SUCCESS,
            payload:data
        })
        localStorage.setItem("userInfo",JSON.stringify(data))
    } catch (error) {
        dispatch({
            type:LOGIN_USER_FAIL,
            payload:error.message
        })
    }
}

export const registerAction=(firstName,lastName,email,password,confirmPassword)=>async(dispatch,getState)=>{
    try {
        dispatch({type:REGISTER_USER_REQUEST})
        const {data}= await axios.post(`${BASE_URL}/account/register`,{firstName,lastName,email,password,confirmPassword})       
        dispatch({
            type:REGISTER_USER_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:REGISTER_USER_FAIL,
            payload:error.message
        })
    }
}