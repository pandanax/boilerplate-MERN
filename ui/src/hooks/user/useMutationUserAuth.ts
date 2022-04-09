import {useMutation} from 'react-query';
import config from '../../configs/env'

const {baseApiUrl} = config;


export interface IAuthData {
    email: string,
    password: string,
}

const auth = async ({email, password}: IAuthData) => {
    const response = await fetch(`${baseApiUrl}user`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password}) // body data type must match "Content-Type" header
    });
    return await response.json().then(({success, data, errorMessage}) => {
        if (success) {
            localStorage.setItem('token', data);
            window.location.href = '/';
        } else throw Error(errorMessage)
    }); // parses JSON response into native JavaScript objects

};

export default function useMutationUserAuth(onSuccessCallback: () => void) {
    const {
        data,
        error,
        isError,
        isIdle,
        isLoading,
        isPaused,
        isSuccess,
        mutate,
        mutateAsync,
        reset,
        status,
    } = useMutation((params: IAuthData) => auth(params), {
        mutationKey: 'useMutationUserAuth',
        onError: (e) => console.error('onError', e),
        onSuccess: () => onSuccessCallback(),
    })

    return {
        data,
        error,
        isError,
        isIdle,
        isLoading,
        isPaused,
        isSuccess,
        mutate,
        mutateAsync,
        reset,
        status,
    }

}
