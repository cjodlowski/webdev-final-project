import React, { useState } from "react";
import "./catalog.css"
import CatalogItem from "./CatalogItem"

const Catalog = () => {
    //const [items, setItems] = useState([]);

    let tempItems = [
        {title: "black shirt",
        image: "...",
        seller: "seller1",
        price: 5,
        rating: 4.8,
        tags: ["black", "shirt"],
        featured: true
        },
        {title: "red shirt",
        image: "...",
        seller: "seller2",
        price: 6,
        rating: 4.0,
        tags: ["red", "shirt"],
        featured: false
        },
        {title: "red shirt",
        image: "...",
        seller: "seller2",
        price: 6,
        rating: 4.0,
        tags: ["red", "shirt"],
        featured: false
        },
        {title: "red shirt",
        image: "...",
        seller: "seller2",
        price: 6,
        rating: 4.0,
        tags: ["red", "shirt"],
        featured: false
        },
        {title: "red shirt",
        image: "...",
        seller: "seller2",
        price: 6,
        rating: 4.0,
        tags: ["red", "shirt"],
        featured: false
        }
    ]

    return(
            <div className={"row"}>
                {tempItems.map(CatalogItem)}
            </div>
    )
}

export default Catalog;