import axios from "axios"
import { BASE_URL } from "../../api/BaseConfig"
import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS } from "../Constants/CategoryConstants"

export const listCategories=()=>async(dispatch)=>{
    try {
        dispatch({type:CATEGORY_LIST_REQUEST})
        const {data} = await axios.get(`${BASE_URL}/category/getAll`)
        dispatch({type:CATEGORY_LIST_SUCCESS,payload:data})
            
    } catch (error) {
        dispatch({type:CATEGORY_LIST_FAIL,payload:error})
    }

}