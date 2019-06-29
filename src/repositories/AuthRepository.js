const LOGIN_URL = 'http://localhost:4000/login';

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