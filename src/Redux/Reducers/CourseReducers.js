import { COURSE_ADD_FAIL, COURSE_ADD_REQUEST, COURSE_ADD_SUCCESS, COURSE_CLEAR, COURSE_DELETE_FAIL, COURSE_DELETE_REQUEST, COURSE_DELETE_SUCCESS, COURSE_EDIT_FAIL, COURSE_EDIT_REQUEST, COURSE_EDIT_SUCCESS, COURSE_LIST_FAIL, COURSE_LIST_REQUEST, COURSE_LIST_SUCCESS } from "../Constants/CourseConstants";

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
export const courseEditReducers=(state={course:{}},action)=>{
    switch (action.type) {
        case COURSE_EDIT_REQUEST:
            return {...state,loading:true}
        case COURSE_EDIT_SUCCESS:
            return {loading:false,course:action.payload}
            case COURSE_EDIT_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}
export const courseDeleteReducers=(state={course:{}},action)=>{
    switch (action.type) {
        case COURSE_DELETE_REQUEST:
            return {loading:true}
        case COURSE_DELETE_SUCCESS:
            return {loading:false,course:action.payload}
            case COURSE_DELETE_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}