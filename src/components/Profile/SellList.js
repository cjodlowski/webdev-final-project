
import React from "react";
import CatalogItem from "../Home/Catalog/CatalogItem";

const SellList = () => {
    return(
        <>
            <h2 className={"m-3"}>Items for sale</h2>
            <div className="my-3">
                <CatalogItem/>
            </div>
        </>
        // map over list of sell items
    );
}
export default SellList;