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

// export const getDataSuccess = (data, name) => {
//     return {
//         type: actionType.GET_DATA_SUCCESS,
//         [name]: data
//     }
// }

export const postDataSuccess = (response) => {
    return {
        type: actionType.POST_DATA_SUCCESS,
        response
    }
}

export const getData = (url, name, props) => {
    return (dispatch) => {
        API.get(url)
        .then(response => {
            dispatch({
                type: actionType.GET_DATA_SUCCESS,
                data: response.data.result,
                name
            });
        })
        .catch(error => {
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
        })
    }
}
