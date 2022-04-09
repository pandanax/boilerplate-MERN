import {useMutation, useQuery} from 'react-query';
import config from '../../configs/env'

const {baseApiUrl} = config;

export interface IAuthData {
    email: string,
    password: string,
}

const getCurrentUser = async () => {
    const response = await fetch(`${baseApiUrl}user`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    });
    return await response.json().then(({success, data, errorMessage}) => {
        if (success) {
            return data;
        } else throw Error(errorMessage);
    });

};

export default function useQueryCurrentUser() {
    const {
        data,
        error,
        isError,
        isIdle,
        isLoading,
        isSuccess,
        status,
    } = useQuery('useQueryCurrentUser', getCurrentUser, {
        cacheTime: 0,
        retry: 0,
    })

    return {
        data,
        error,
        isError,
        isIdle,
        isLoading,
        isSuccess,
        status,
    }

}
