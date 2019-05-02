import * as actionType from './../constants/actiontype';

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
