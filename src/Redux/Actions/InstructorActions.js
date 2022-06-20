import axios from "axios"
import { BASE_URL } from "../../api/BaseConfig"
import { INSTRUCTOR_LIST_FAIL, INSTRUCTOR_LIST_REQUEST, INSTRUCTOR_LIST_SUCCESS } from "../Constants/InstructorConstants"

export const listInstructors=()=>async(dispatch)=>{
    try {
        dispatch({type:INSTRUCTOR_LIST_REQUEST})
        const {data} = await axios.get(`${BASE_URL}/instructor`)
        dispatch({type:INSTRUCTOR_LIST_SUCCESS,payload:data})
            
    } catch (error) {
        dispatch({type:INSTRUCTOR_LIST_FAIL,payload:error})
    }

}