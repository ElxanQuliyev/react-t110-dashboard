import { INSTRUCTOR_LIST_FAIL, INSTRUCTOR_LIST_REQUEST, INSTRUCTOR_LIST_SUCCESS } from "../Constants/InstructorConstants";

export const instructorListReducers=(state={instructors:[]},action)=>{
    switch (action.type) {
        case INSTRUCTOR_LIST_REQUEST:
            return {loading:true}
        case INSTRUCTOR_LIST_SUCCESS:
            return {loading:false,instructors:action.payload}
            case INSTRUCTOR_LIST_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}