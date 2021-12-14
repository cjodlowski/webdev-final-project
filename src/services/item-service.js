

export const findAllItems = () => {
    return fetch("http://localhost:4000/api/items")
        .then(response => response.json());
}

export const findFeatured = () => {
    return fetch("http://localhost:4000/api/items/featured")
    .then(response => response.json());
}

export const findSearchResults = (tags) => {
    return fetch(`http://localhost:4000/api/items/search/${tags}`)
    .then(response => response.json());
}

export const findItemById = (id) => {
    return fetch(`http://localhost:4000/api/items/${id}`)
    .then(response => response.json());
}