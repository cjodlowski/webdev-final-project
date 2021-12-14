
export const findUserbyId = (id) => {
    return fetch(`http://localhost:4000/api/users/${id}`)
    .then(response => response.json());
}

export const findLoggedIn = () => {
    return fetch(`http://localhost:4000/api/usersloggedin/`).then(response => {return response.json();});
}