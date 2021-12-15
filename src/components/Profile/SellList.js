
import React, {useEffect, useState} from "react";
import CatalogItem from "../Home/Catalog/CatalogItem";
import {useParams} from "react-router-dom";
import {findUserbyId} from "../../services/user-service";
import {findFiltered} from "../../services/item-service";

const SellList = () => {
    const [user, setUser] = useState({});
    const [selling, setSelling] = useState([]);
    const params = useParams();
    useEffect(() => { findUserbyId(params.id).then(result => setUser(result)) }, [user]);
    useEffect(() => {findFiltered(user.selling).then(result => setSelling(result))}, [user.selling, selling]);
    return(
        <>
            <div className="mx-2 mt-3 container">
                <div className={"row ms-3"}>
                    {
                        selling.map((item, key) => {
                            return <CatalogItem key={key} item={item} />
                        })
                    }
                </div>
            </div>
        </>
        // map over list of sell items
    );
}
export default SellList;