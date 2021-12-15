import React, { useEffect, useState } from "react";
import "./catalog.css"
import CatalogItem from "./CatalogItem"

import {findAllItems} from "../../../services/item-service"

const Catalog = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {findAllItems().then(received => setItems(received))}, [items]);
    return(
        <div className={"row"}>
            <div className={"col-2"}/>
            <div className={"col-10 my-3"}>
                <div className={"row"}>
                        {
                            items.map((item, key) => {
                                return <CatalogItem key={key} item={item}/>
                            })
                        }
                </div>
            </div>
            <div className={"col-0"}/>
        </div>
    )
}

export default Catalog;