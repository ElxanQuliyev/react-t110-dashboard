import { COURSE_ADD_FAIL, COURSE_ADD_REQUEST, COURSE_ADD_SUCCESS } from "../Constants/CourseConstants";

export const courseReducers=(state={courseInfo:{}},action)=>{
    switch (action.type) {
        case COURSE_ADD_REQUEST:
            return {loading:true}
        case COURSE_ADD_SUCCESS:
            return {loading:false,courseInfo:action.payload}
            case COURSE_ADD_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}