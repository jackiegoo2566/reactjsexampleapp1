import * as actionType from './../constants/actiontype';
// import axios from './../axios/axios';

const initialState = {
    listTasks: null
}

// const executeGetDataSuccess = (state, action) => {
//     return {
//         ...state,
//         data: action.data
//     }
// }

 
// const executePostDataSuccess = (state, action) => {
//     return {
//         ...state
//     }
// }

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_DATA_SUCCESS:
            var o = {
                ...state,
                listTasks: action.data
            };
            return o;
        case actionType.POST_DATA_SUCCESS:
            return {
                ...state
            };
        default:
            return null;
    }
}

export default myReducer;
