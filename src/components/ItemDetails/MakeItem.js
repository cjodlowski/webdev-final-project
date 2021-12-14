import React, {useEffect, useState} from "react";
import CatalogItem from "../Home/Catalog/CatalogItem";
import {findAllItems} from "../../services/item-service";
import {Link} from "react-router-dom";

const MakeItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {findAllItems().then(received => setItems(received))});

    return (
        <div className={"d-flex p-2"}>
            <div className={"col-1"}/>
            <div className={"container col-10"}>
                <div className={"mx-3 px-3"}>
                    <div className="form-group">
                        <label htmlFor="newTitle"
                               className="form-label mt-4">New item name</label>
                        <input type="title" className="form-control" id="newTitle"
                               aria-describedby="emailHelp" placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="newItemPrice"
                               className="form-label mt-4">Selling price</label>
                        <input type="price" className="form-control" id="newItemPrice"
                               placeholder="Enter price"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="newItemTags" className="form-label mt-4" data-bs-toggle={"tooltip"} title={"Please enter a list separated by spaces!"}>Item tags</label>
                        <input type="tags" className="form-control" id="newItemTags"
                               placeholder="Enter tags"  data-bs-toggle={"tooltip"} title={"Please enter a list separated by spaces!"}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formFile" className="form-label mt-4">Profile picture</label>
                        <input className="form-control" type="file" id="formFile"/>
                    </div>
                    <div className={"mt-2"}>
                        {/* Update User in DB here */}
                        <button onClick={() => {
                        }} className={"btn btn-secondary my-2"}>Create Listing
                        </button>
                    </div>
                </div>
            </div>

            <div className={"col-1"}/>
        </div>
    )
}

export default MakeItem;