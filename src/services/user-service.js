
export const findUserbyId = (id) => {
    return fetch(`http://localhost:4000/api/users/${id}`)
    .then(response => response.json());
}
export const findUserbyUN = (UN) => {
    return fetch(`http://localhost:4000/api/users/un/${UN}`)
    .then(response => response.json());
}

export const findLoggedUser = () => {
    return fetch(`http://localhost:4000/api/usersloggedin`)
    .then(response => response.json());
}


export const logUserIn = (id) => {
    const req = {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        }
    };
    return fetch(`http://localhost:4000/api/users/login/${id}`, req)
        .then(response => response.json());
}

export const createNewUser = (user) => {
    const req = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    };
    return fetch(`http://localhost:4000/api/users`, req)
        .then(response => response.json());
}

export const logUserOut = (id) => {
    const req = {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        }
    };
    return fetch(`http://localhost:4000/api/users/logout/${id}`, req)
        .then(response => response.json());
}