import * as actionType from './../constants/actiontype';

var initialState = false; // true: open form - false: close form
var myReducer = (state = initialState, action) => {
  switch (action.type)
  {
    case actionType.OPEN_FORM:
      return true;        
    case actionType.CLOSE_FORM:
      return false;
    default:
      return state;
  }
} 

export default myReducer;
