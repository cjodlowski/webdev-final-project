import React, { useState } from "react";
import "./catalog.css"
import CatalogItem from "./CatalogItem"

const Catalog = () => {
    //const [items, setItems] = useState([]);

    return(
        <>
            <table>
                <tr className={"mb-2 table-spacing override-bs"}>
                    <td>
                        <CatalogItem/>
                    </td>
                    <td>
                        <CatalogItem/>
                    </td>
                    <td>
                        <CatalogItem/>
                    </td>
                </tr>
            </table>
        </>
    )
}

export default Catalog;