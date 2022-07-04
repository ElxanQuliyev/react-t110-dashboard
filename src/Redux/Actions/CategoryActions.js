import axios from "axios"
import { BASE_URL } from "../../api/BaseConfig"
import { CATEGORY_ADD_FAIL, CATEGORY_ADD_REQUEST, CATEGORY_ADD_SUCCESS, CATEGORY_DELETE_FAIL, CATEGORY_DELETE_REQUEST, CATEGORY_DELETE_SUCCESS, CATEGORY_EDIT_FAIL, CATEGORY_EDIT_REQUEST, CATEGORY_EDIT_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_UPDATE_FAIL, CATEGORY_UPDATE_REQUEST, CATEGORY_UPDATE_SUCCESS } from "../Constants/CategoryConstants"

export const listCategories=()=>async(dispatch)=>{
    try {
        dispatch({type:CATEGORY_LIST_REQUEST})
        const {data} = await axios.get(`${BASE_URL}/category/with-parent`)
        dispatch({type:CATEGORY_LIST_SUCCESS,payload:data})
            
    } catch (error) {
        dispatch({type:CATEGORY_LIST_FAIL,payload:error})
    }

}

export const categoryUpdateAction=(categoryData)=>async(dispatch)=>{
    try {
        const config={
            headers:{
                "Content-Type": "application/json",
            }
        }
        dispatch({type:CATEGORY_UPDATE_REQUEST});
        const {data} =await axios.put(`${BASE_URL}/category/${categoryData.id}`,
        JSON.stringify(categoryData), config
        )
        dispatch({type:CATEGORY_UPDATE_SUCCESS,payload:data});
        dispatch({type:CATEGORY_EDIT_SUCCESS,payload:data.data});

    } catch (error) {
        dispatch({type:CATEGORY_UPDATE_FAIL,payload:error});
    }
}

export const categoryAdd=(categoryData)=>async(dispatch,getState)=>{
    try {
        dispatch({type:CATEGORY_ADD_REQUEST});
        const config={
            headers:{
                "Content-Type": "application/json",
            }
        }
        const {data} = await axios.post(`${BASE_URL}/category/add`,JSON.stringify(categoryData),config)
        dispatch({type:CATEGORY_ADD_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:CATEGORY_ADD_FAIL,payload:error});
    }
}


export const courseEditAction=(id)=>async(dispatch)=>{
    try {
        dispatch({type:CATEGORY_EDIT_REQUEST});
        const {data} = await axios.get(`${BASE_URL}/category/${id}`)
        dispatch({type:CATEGORY_EDIT_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:CATEGORY_EDIT_FAIL,payload:error});
    }
}

export const courseDelete=(id)=>async(dispatch)=>{
    try {
        dispatch({type:CATEGORY_DELETE_REQUEST})
        const {data} = await axios.delete(`${BASE_URL}/category/${id}`)
        dispatch({
            type:CATEGORY_DELETE_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:CATEGORY_DELETE_FAIL,
            payload:error
        })
    }
}
