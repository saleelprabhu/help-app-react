// import created axios with default url from file
import axios from '../axios/axios';
// Action types
import {
    FETCH_CONTENT_REQUEST,
    FETCH_CONTENT_SUCCESS,
    FETCH_CONTENT_ERROR
} from './actiontypes';

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