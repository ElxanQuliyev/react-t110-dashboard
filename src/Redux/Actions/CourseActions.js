import axios from "axios";
import { BASE_URL } from "../../api/BaseConfig";
import { COURSE_ADD_FAIL, COURSE_ADD_REQUEST, COURSE_ADD_SUCCESS, COURSE_DELETE_FAIL, COURSE_DELETE_REQUEST, COURSE_DELETE_SUCCESS, COURSE_EDIT_FAIL, COURSE_EDIT_REQUEST, COURSE_EDIT_SUCCESS, COURSE_LIST_FAIL, COURSE_LIST_REQUEST, COURSE_LIST_SUCCESS, COURSE_UPDATE_FAIL, COURSE_UPDATE_REQUEST, COURSE_UPDATE_SUCCESS } from "../Constants/CourseConstants"

export const courseAdd=(courseData)=>async(dispatch)=>{
    try {
        dispatch({type:COURSE_ADD_REQUEST});
        const config={
            headers:{
                "Content-Type": "application/json",
            }
        }
        const {data} = await axios.post(`${BASE_URL}/course`,JSON.stringify(courseData),config)
        dispatch({type:COURSE_ADD_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:COURSE_ADD_FAIL,payload:error});
    }
}

export const courseUpdateAction=(courseEditData)=>async(dispatch)=>{
    try {
        const config={
            headers:{
                "Content-Type": "application/json",
            }
        }
        dispatch({type:COURSE_UPDATE_REQUEST});
        const {data} =await axios.put(`${BASE_URL}/course/${courseEditData.id}`,
        JSON.stringify(courseEditData), config
        )
        console.log(data)
        dispatch({type:COURSE_UPDATE_SUCCESS,payload:data});
        dispatch({type:COURSE_EDIT_SUCCESS,payload:data.data});

    } catch (error) {
        dispatch({type:COURSE_UPDATE_FAIL,payload:error});
    }
}

export const courseListAction=()=>async(dispatch)=>{
    try {
        dispatch({type:COURSE_LIST_REQUEST});
        const {data} = await axios.get(`${BASE_URL}/course`)
        dispatch({type:COURSE_LIST_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:COURSE_LIST_FAIL,payload:error});
    }
}

export const courseEditAction=(id)=>async(dispatch)=>{
    try {
        dispatch({type:COURSE_EDIT_REQUEST});
        const {data} = await axios.get(`${BASE_URL}/course/${id}`)
        dispatch({type:COURSE_EDIT_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:COURSE_EDIT_FAIL,payload:error});
    }
}

export const courseDelete=(id)=>async(dispatch)=>{
    try {
        dispatch({type:COURSE_DELETE_REQUEST})
        const {data} = await axios.delete(`${BASE_URL}/course/${id}`)
        dispatch({
            type:COURSE_DELETE_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:COURSE_DELETE_FAIL,
            payload:error
        })
    }
}





