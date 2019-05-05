import * as actionType from './../constants/actiontype';
import API from './../axios/axios';

export const listAll = () => {
    return {
        type: actionType.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type: actionType.ADD_TASK,
        task
    }
}

export const openForm = () => {
    return {
        type: actionType.OPEN_FORM
    }
}

export const closeForm = () => {
    return {
        type: actionType.CLOSE_FORM    
    }
}

export const getDataSuccess = (data) => {
    return {
        type: actionType.GET_DATA_SUCCESS,
        data
    }
}

export const postDataSuccess = (response) => {
    return {
        type: actionType.POST_DATA_SUCCESS,
        response
    }
}

export const getData = (url, props) => {
    return (dispatch) => {
        API.get(url)
        .then(response => {
            // dispatch(getDataSuccess(response.data));
            dispatch({
                type: actionType.GET_DATA_SUCCESS,
                data: response.data.result
            });
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
}

export const postData = (url, obj, props) => {
    return (dispatch) => {
        API.post(url, obj)
        .then(response => {
            dispatch(postDataSuccess(response));
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
}
