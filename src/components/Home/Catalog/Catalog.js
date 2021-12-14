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
<<<<<<< HEAD
                        //console.log(item);
=======
>>>>>>> 9fb5817f13d997cf4c42b6c9b11dde7ed1946935
                        return <CatalogItem key={key} item={item} />
                    })
                }
            </div>
        </>
    )
}

export default Catalog;