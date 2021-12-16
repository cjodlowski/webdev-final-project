import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import { findUserbyId, addItemToList } from "../../services/user-service";
import { createNewItem } from "../../services/item-service";
const MakeItem = () => {
    
    const [user, setUser] = useState({});
    const [item, setItem] = useState({});
    const params = useParams();
    const findUser = () => {findUserbyId(params.id).then(result => setUser(result))};

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [tags, setTags] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        findUser();
    }, [user]);

    useEffect(() => {
        addItemToList(user._id, {iid:item._id, list: "selling"});
    }, [item]);

    const createItem = () => {
        let newitem = {
            title: title,
            price: price,
            image: "/images/shoppingcart.webp",
            rating: 0,
            tags: tags.split(" "),
            featured: false,
            seller : user.username,
            desc : desc
        }

        createNewItem(newitem).then(result => setItem(result));
    }

    return (
        <div className={"d-flex p-2"}>
            <div className={"col-1"}/>
            <div className={"container col-10"}>
                <div className={"mx-3 px-3"}>
                    <div className="form-group">
                        <label htmlFor="newTitle"
                               className="form-label mt-4">New item name</label>
                        <input onChange={(e) => setTitle(e.target.value)} value={title} type="title" className="form-control" id="newTitle"
                               aria-describedby="emailHelp" placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="newItemPrice"
                               className="form-label mt-4">Selling price</label>
                        <input onChange={(e) => setPrice(e.target.value)} value={price} type="price" className="form-control" id="newItemPrice"
                               placeholder="Enter price"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="newItemTags" className="form-label mt-4" data-bs-toggle={"tooltip"} title={"Please enter a list separated by spaces!"}>Item tags</label>
                        <input onChange={(e) => setTags(e.target.value)} value={tags} type="tags" className="form-control" id="newItemTags"
                               placeholder="Enter tags"  data-bs-toggle={"tooltip"} title={"Please enter a list separated by spaces!"}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="newDesc" className="form-label mt-4" data-bs-toggle={"tooltip"} title={"Describe your item!"}>Item description</label>
                        <input onChange={(e) => setDesc(e.target.value)} value={desc} type="desc" className="form-control" id="newDesc"
                               placeholder="Enter Description"  data-bs-toggle={"tooltip"} title={"Describe your item!"}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formFile" className="form-label mt-4">Item picture</label>
                        <input className="form-control" type="file" id="formFile"/>
                    </div>
                    <div className={"mt-2"}>
                        <button onClick={() => {createItem()}} className={"btn btn-secondary my-2"}>Create Listing
                        </button>
                    </div>
                </div>
            </div>

            <div className={"col-1"}/>
        </div>
    )
}

export default MakeItem;