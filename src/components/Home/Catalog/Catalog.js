import React, { useEffect, useState } from "react";
import "./catalog.css"
import CatalogItem from "./CatalogItem"

import findAllItems from "../../../services/item-service"

const Catalog = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {findAllItems().then(received => setItems(received))})

    return(
        <>
            <table>
                <tr className={"mb-2 table-spacing override-bs"}>
                    {
                        items.map((item, key) => {
                            <CatalogItem key={key} item={item} />
                        })
                    }
                </tr>
            </table>
        </>
    )
}

export default Catalog;