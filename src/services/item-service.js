

export const findAllItems = () => {
    return fetch("http://localhost:4000/api/items")
        .then(response => response.json());
}

export const findFeatured = () => {
    return fetch("http://localhost:4000/api/items/featured")
    .then(response => response.json());
}

export const findSearchResults = (tags) => {
    return fetch(`http://localhost:4000/api/items/search/id/${tags}`)
    .then(response => response.json());
}

export const findItemById = (id) => {
    return fetch(`http://localhost:4000/api/items/${id}`)
    .then(response => response.json());
}

export const findFiltered = (idarr) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(idarr),
        headers: {
            'content-type': 'application/json'
        }
    };
    return fetch(`http://localhost:4000/api/items/filtered`, requestOptions).then(response => response.json());
}
