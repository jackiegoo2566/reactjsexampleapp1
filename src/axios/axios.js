import axios from 'axios';
import * as apiPath from './../constants/apipathcomponent';

const baseUrl = apiPath.LOCAL_API_IIS_SERVER;

export default axios.create({
    baseURL: baseUrl,
    headers: {
    }
});
