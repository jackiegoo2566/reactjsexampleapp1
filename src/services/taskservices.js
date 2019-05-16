import * as action from './../actions';
import * as apipathcomponent from './../constants/apipathcomponent';

export const getAll = () => {
  let url = apipathcomponent.TASK_APIS + 'get-all?code=2566';
  return action.getData(url, "listTasks");
}

export const postData = (url, obj, props) => {

}
