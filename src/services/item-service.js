

export const findAllItems = () => {
    return fetch("http://localhost:4000/api/items")
        .then(response => response.json());
}

export const findFeatured = () => {
    return fetch("http://localhost:4000/api/items/featured")
    .then(response => response.json());
}

export const findSearchResults = (tags) => {
    fetch("http://localhost:4000/api/items/search", {
        method: 'GET',
        body: JSON.stringify(tags),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());
}