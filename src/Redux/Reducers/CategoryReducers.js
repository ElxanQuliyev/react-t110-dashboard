import { CATEGORY_ADD_FAIL, CATEGORY_ADD_REQUEST, CATEGORY_ADD_RESET, CATEGORY_ADD_SUCCESS, CATEGORY_DELETE_FAIL, CATEGORY_DELETE_REQUEST, CATEGORY_DELETE_SUCCESS, CATEGORY_EDIT_FAIL, CATEGORY_EDIT_REQUEST, CATEGORY_EDIT_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_UPDATE_FAIL, CATEGORY_UPDATE_REQUEST, CATEGORY_UPDATE_SUCCESS } from "../Constants/CategoryConstants";
export const categoryAddReducers=(state={category:{}},action)=>{
    switch (action.type) {
        case CATEGORY_ADD_REQUEST:
            return {loading:true}
        case CATEGORY_ADD_SUCCESS:
            return {loading:false,createSuccess:true,category:action.payload}
           case CATEGORY_ADD_RESET:
            return {};
            case CATEGORY_ADD_FAIL:
                return {loading:false,error:action.payload}

        default:
            return state;
    }
}

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
export const categoryEditReducers=(state={category:{}},action)=>{
    switch (action.type) {
        case CATEGORY_EDIT_REQUEST:
            return {...state,loading:true}
        case CATEGORY_EDIT_SUCCESS:
            return {loading:false,category:action.payload}
            case CATEGORY_EDIT_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}
export const categoryUpdateReducer=(state={category:{}},action)=>{
    switch (action.type) {
        case CATEGORY_UPDATE_REQUEST:
            return {...state,loading:true}
        case CATEGORY_UPDATE_SUCCESS:
            return {loading:false,success: true,category:action.payload}
        case CATEGORY_UPDATE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}
export const categoryDeleteReducers=(state={category:{}},action)=>{
    switch (action.type) {
        case CATEGORY_DELETE_REQUEST:
            return {loading:true}
        case CATEGORY_DELETE_SUCCESS:
            return {loading:false,category:action.payload}
            case CATEGORY_DELETE_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}