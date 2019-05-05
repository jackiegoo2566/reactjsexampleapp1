import axios from 'axios';
import * as apiPath from './../constants/apipathcomponent';

export default axios.create({
    baseURL: apiPath.LOCAL_API_SERVER,
    headers: {
    }
});
