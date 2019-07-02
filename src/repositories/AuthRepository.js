/* global Promise fetch localStorage */
const LOGIN_URL = 'http://localhost:4000/login';
const REGISTER_URL = 'http://localhost:4000/register';

export const login = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
            .then(res => res.json())
            .then(userToken => {
                if (userToken.token.length > 0) localStorage.setItem('userToken', userToken.token);
                resolve(userToken);
            })
            .catch(error => reject(error));
    });
};

export const register = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        fetch(REGISTER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then((user) => {
                if (user) resolve(user);
            })
            .catch(error => reject(error));
    });
};

export const checkToken = () => {
    return localStorage.getItem('userToken');
};