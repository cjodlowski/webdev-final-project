import React, { useEffect, useState } from "react";
import "../Home/Catalog/catalog.css"
import CatalogItem from "../Home/Catalog/CatalogItem"

import {findFeatured} from "../../services/item-service";

const Featured = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {findFeatured().then(received => setItems(received))}, [items]);
    return(
        <div className={"row"}>
            <div className={"col-2"}/>
            <div className={"col-10 my-3"}>
                <div className={"row"}>
                {
                    items.map((item, key) => {
                        //console.log(item);
                        return <CatalogItem key={key} item={item} />
                    })
                }
                </div>
            </div>
            <div className={"col-0"}/>
        </div>
    )
}

export default Featured;