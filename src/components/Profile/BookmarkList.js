import React, { useEffect, useState } from "react";
import Bookmark from "./Bookmark"
import CatalogItem from "../Home/Catalog/CatalogItem";

import {findAllItems} from "../../services/item-service"

const BookmarkList = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {findAllItems().then(received => setItems(received))});

    return(
        <div className="mx-2">
            <h2>Bookmarks</h2>
            <ul className="list-group">
                {
                    items.map((item, key) => {
                        console.log(item);
                        return <CatalogItem key={key} item={item} />
                    })
                }
            </ul>
        </div>
    )
}

export default BookmarkList;