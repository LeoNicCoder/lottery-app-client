import Cookies from 'js-cookie';

export const setToken = ( token ) => {

    Cookies.set('access_token', token, {
        sameSite: 'strict',
        secure: true
    });
}

export const getToken = () => {
    return Cookies.get('access_token');
}

export const deleteToken = () => {

    Cookies.remove('access_token');
}