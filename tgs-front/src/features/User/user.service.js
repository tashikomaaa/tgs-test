

export const userService = {
    login,
    logout,
    register,

};

function login(username, phoneNumber) {
    const requestOptions = {
        method: 'POST',
        mode:'no-cors',
        headers: { 'Content-Type': 'Application/json', 'x-api-key': '8k5jqE35yN3yVUaxFP824FOq8oJeLyr3bVyiZmig', "access-control-allow-origin" : "*" },
        body: { username, phoneNumber }
    };
    console.log(requestOptions)
    return fetch(`${'https://staging.api.external.thegoodseat.fr'}/loginuser`, requestOptions)
        .then(handleResponse)
        .then(user => {
            console.log('connect')
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}


function register(user) {
    const requestOptions = {
        method: 'POST',
        mode:'no-cors',
        headers: { 'Content-Type': 'Application/json', 'x-api-key': '8k5jqE35yN3yVUaxFP824FOq8oJeLyr3bVyiZmig', "access-control-allow-origin" : "*" },
        body: JSON.stringify(user)
    };

    return fetch(`${'https://staging.api.external.thegoodseat.fr'}/registeruser`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}