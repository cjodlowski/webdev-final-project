
export const findUserbyId = (id) => {
    return fetch(`http://localhost:4000/api/users/${id}`)
    .then(response => response.json());
}