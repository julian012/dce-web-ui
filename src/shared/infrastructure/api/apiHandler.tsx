import {URL_PROD} from "../../application/constants/env.tsx";
import {ERROR_ON_REQUEST, NO_LOAD_DATA, SERVER_SIDE_ERROR} from "../../application/constants/errorMessages.tsx";

export const urlBase = URL_PROD

export const handleResponse = (response: any) =>
    response.json().then((data: any) => {
        if (!response.ok) {
            if (response.status === 401) {
                // todo
            }
            const unknowMessage = response.status >= 500 ? SERVER_SIDE_ERROR : ERROR_ON_REQUEST;
            let error = (data && (data.error || data.message)) || unknowMessage;
            if (response.status === 404) {
                error = NO_LOAD_DATA;
            }
            return Promise.reject(data.error_type ? data : error);
        }
        return data;
    });

export const authHeader = (contentType = 'application/json', jwtToken = null) => {
    // return authorization header with jwt token
    // const user = JSON.parse(checkCookieExistence(LOCALSTORAGE_USER));
    const headerOptions = new Headers({'Content-Type': contentType});

    //if (jwtToken || user?.token) {
    //headerOptions.append('Authorization', `Bearer ${jwtToken || user?.token}`);
    //}

    return headerOptions;
};