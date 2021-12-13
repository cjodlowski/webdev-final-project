export const findAllItems = () => {
    fetch("http://localhost:4000/api/items")
        .then(response => response.json());
}

export default {
    findAllItems
}