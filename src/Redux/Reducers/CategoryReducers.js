import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS } from "../Constants/CategoryConstants";

export const categoryListReducers=(state={categories:[]},action)=>{
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return {...state,loading:true}
        case CATEGORY_LIST_SUCCESS:
            return {loading:false,categories:action.payload}
            case CATEGORY_LIST_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}