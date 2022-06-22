import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { LoginReducers, RegisterReducers } from './Reducers/UserReducers';
import thunk from 'redux-thunk';
import { categoryListReducers } from './Reducers/CategoryReducers';
import { instructorListReducers } from './Reducers/InstructorReducers';
import { courseListReducers, courseReducers } from './Reducers/CourseReducers';


const userFromLocalStorage=localStorage.getItem("userInfo")?
 JSON.parse(localStorage.getItem("userInfo")): null

const reducer=combineReducers({
    loginUser:LoginReducers,
    registerUser:RegisterReducers,
    categoryList:categoryListReducers,
    instructorList:instructorListReducers,
    addedCourseRed:courseReducers,
    courseList:courseListReducers
})

const initialState={
    loginUser:{
        userInfo:userFromLocalStorage
    }
}
const store=configureStore({reducer,initialState,middleware:[thunk]});

export default store;

