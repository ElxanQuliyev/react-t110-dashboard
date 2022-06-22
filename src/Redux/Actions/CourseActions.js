import axios from "axios";
import { BASE_URL } from "../../api/BaseConfig";
import { COURSE_ADD_FAIL, COURSE_ADD_REQUEST, COURSE_ADD_SUCCESS, COURSE_LIST_FAIL, COURSE_LIST_REQUEST, COURSE_LIST_SUCCESS } from "../Constants/CourseConstants"

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

export const courseListAction=()=>async(dispatch)=>{
    try {
        dispatch({type:COURSE_LIST_REQUEST});
        const {data} = await axios.get(`${BASE_URL}/course`)
        dispatch({type:COURSE_LIST_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:COURSE_LIST_FAIL,payload:error});
    }
}

export const courseDelete=()=>()=>{
    
}





