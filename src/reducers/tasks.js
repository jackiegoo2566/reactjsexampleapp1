import * as actionType from './../constants/actiontype';

var genRandom = () => {
  return Math.floor((1 + Math.random()) * 0x100000).toString(16).substring(1);
}

var generateId = () => {
  return genRandom() + genRandom () + '-' + genRandom() + genRandom () + '-' + genRandom () + '-' + genRandom ();
}

var tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));

var initialState = tasksFromLocalStorage ? tasksFromLocalStorage : [];

var myReducer = (state = initialState, action) => {
  switch (action.type)
  {
    case actionType.LIST_ALL:
      return state;        
    case actionType.ADD_TASK:
      var newTask = {
          id: generateId(),
          name: action.task.name,
          status: action.task.status === 'true'
      };
      state.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}

export default myReducer;
