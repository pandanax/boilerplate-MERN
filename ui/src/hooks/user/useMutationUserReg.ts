import {useMutation} from 'react-query';
import config from '../../configs/env'

const {baseApiUrl} = config;


export interface IRegData {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
}

const reg = async ({email, password, firstName, lastName}: IRegData): Promise<IRegResult> => {
    try {

        const response = await fetch(`${baseApiUrl}user`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, firstName, lastName}) // body data type must match "Content-Type" header
        });
        return await response.json().then(({success, data, errorMessage}) => {
            if (success) {
                return {
                    success: true,
                    errorMessage: '',
                };
            } else {
                return {
                    success: false,
                    errorMessage,
                }
            }
        }); // parses JSON response into native JavaScript objects
    } catch (e: any) {
        if (e instanceof Error) {
            console.log('-----e', e.message)
            return {
                success: false,
                errorMessage: e.message,
            }
        }
        return {
            success: false,
            errorMessage: e,
        }

    }

};

interface IRegResult {success: boolean, errorMessage: string}

export default function useMutationUserReg(onSuccessCallback: (e: IRegResult) => void) {
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
    } = useMutation((params: IRegData) => reg(params), {
        mutationKey: 'useMutationUserReg',
        onError: (e) => console.error('onError', e),
        onSuccess: onSuccessCallback,
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
