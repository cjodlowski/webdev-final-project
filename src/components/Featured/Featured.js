import React, { useEffect, useState } from "react";
import "../Home/Catalog/catalog.css"
import CatalogItem from "../Home/Catalog/CatalogItem"

import {findFeatured} from "../../services/item-service";

const Featured = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {findFeatured().then(received => setItems(received))})
    return(
        <>
            <div className={"row justify-content-center mt-3"}>
                {
                    items.map((item, key) => {
                        console.log(item);
                        return <CatalogItem key={key} item={item} />
                    })
                }
            </div>
        </>
    )
}

export default Featured;