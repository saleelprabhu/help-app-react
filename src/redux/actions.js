// import created axios with default url from file
import axios from '../axios/axios';
// Action types
import {
    FETCH_CONTENT_REQUEST,
    FETCH_CONTENT_SUCCESS,
    FETCH_CONTENT_ERROR
} from './actiontypes';

/* 
Actions to be dispatched to update redux store
- on content request
- on content success
- on content failure
*/

export const fetchContentRequest = () => {
    return {
        type: FETCH_CONTENT_REQUEST
    }
}

export const fetchContentSuccess = content => {
    return {
        type: FETCH_CONTENT_SUCCESS,
        data: content
    }
}

export const fetchContentError = error => {
    return {
        type: FETCH_CONTENT_ERROR,
        data: error
    }
}

/* 
Thunk Function to make http get call for searching contents
And use middleware to check the axios.get method response
*/

export const fetchContent = (text) => {
    return(dispatch) => {
        dispatch(fetchContentRequest());
        let url = "contents?search=" + text;
        axios.get(url)
            .then(response => {
                dispatch(fetchContentSuccess(response.data))
            })
            .catch(function (error) {
                dispatch(fetchContentError(error.message));
          })
    }
}