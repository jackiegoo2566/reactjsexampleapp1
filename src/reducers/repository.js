import * as actionType from './../constants/actiontype';
// import axios from './../axios/axios';

const initialState = {
    listTasks: null
}

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_DATA_SUCCESS:
      return {
        ...state,
        [action.name]: action.data
      };;
    case actionType.POST_DATA_SUCCESS:
      return {
        ...state
      };
    default:
      return null;
  }
}

export default myReducer;
