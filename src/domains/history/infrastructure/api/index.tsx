import {listUserHistory} from "./backendUrls.tsx";
import {handleResponse} from "../../../../shared/infrastructure/api/apiHandler.tsx";

export const getHistoryListUser = () => {
    const requestOptions = {
        method: 'GET',
        headers: {}
    }

    return fetch(listUserHistory, requestOptions).then(handleResponse)
}