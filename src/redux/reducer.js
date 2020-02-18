// Action types
import {
    FETCH_CONTENT_REQUEST,
    FETCH_CONTENT_SUCCESS,
    FETCH_CONTENT_ERROR
} from './actiontypes';

/* 
Initial State for redux store
- Loading : (true/false) Can be extended to loading-spinner
- Content : Array of content received from server
- Error : Error message in case of error in server response
*/

const initialState = {
    loading: false,
    content: [],
    error:''
}

/* 
Reducer function for all action types
*/

export const contentReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_CONTENT_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_CONTENT_SUCCESS: 
            return {
                loading: false,
                content: action.data,
                error:''
            }
        case FETCH_CONTENT_ERROR: 
            return {
                loading: false,
                content: [],
                error: action.data
            }
        default: return state
    }
}