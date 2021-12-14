import React, { useEffect, useState } from "react";
import Bookmark from "./Bookmark"
import CatalogItem from "../Home/Catalog/CatalogItem";
import {findAllItems} from "../../services/item-service"

const BookmarkList = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {findAllItems().then(received => setItems(received))});

    return(
        <div className="mx-2 mt-3 container">
            <div className={"row ms-3"}>
                {
                    items.map((item, key) => {
                        return <CatalogItem key={key} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default BookmarkList;