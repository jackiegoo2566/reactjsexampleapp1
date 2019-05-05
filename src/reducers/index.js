import { combineReducers } from 'redux';
import tasks from './tasks';
import formState from './formstate';
import repository from './repository';

const myReducer = combineReducers({
    tasks,
    isFormDisplayed: formState,
    repository
});

export default myReducer;
