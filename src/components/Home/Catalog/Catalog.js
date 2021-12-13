import React from "react";
import "./catalog.css"
import CatalogItem from "./CatalogItem"

const Catalog = () => {
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