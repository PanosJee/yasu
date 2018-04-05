import axios from 'axios';
import config from '../config';

let splunkSearch = function search(query, successCallback, errorCallback) {
    axios.post(config.serverUrl, { q: query }, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(
        (result) => {
            successCallback(result.data);
        }, errorCallback);
}

export default splunkSearch;