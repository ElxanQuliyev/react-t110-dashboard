import { COURSE_ADD_FAIL, COURSE_ADD_REQUEST, COURSE_ADD_SUCCESS, COURSE_CLEAR, COURSE_LIST_FAIL, COURSE_LIST_REQUEST, COURSE_LIST_SUCCESS } from "../Constants/CourseConstants";

export const courseReducers=(state={courseInfo:{}},action)=>{
    switch (action.type) {
        case COURSE_ADD_REQUEST:
            return {loading:true}
        case COURSE_ADD_SUCCESS:
            return {loading:false,courseInfo:action.payload}
            case COURSE_ADD_FAIL:
                return {loading:false,error:action.payload}
            case COURSE_CLEAR:
                return {}
        default:
            return state;
    }
}

export const courseListReducers=(state={courses:[]},action)=>{
    switch (action.type) {
        case COURSE_LIST_REQUEST:
            return {loading:true}
        case COURSE_LIST_SUCCESS:
            return {loading:false,courses:action.payload}
            case COURSE_LIST_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}