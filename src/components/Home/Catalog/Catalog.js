import React, { useEffect, useState } from "react";
import "./catalog.css"
import CatalogItem from "./CatalogItem"

import {findAllItems} from "../../../services/item-service"

const Catalog = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {findAllItems().then(received => setItems(received))})
    return(
        <>
            <div className={"row"}>
                {
                    items.map((item, key) => {
                        //console.log(item);
                        return <CatalogItem key={key} item={item} />
                    })
                }
            </div>
        </>
    )
}

export default Catalog;