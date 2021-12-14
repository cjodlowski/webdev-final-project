import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { findSearchResults } from "../../services/item-service";

import CatalogItem from "../Home/Catalog/CatalogItem";


const SearchResults = () => {
    const [results, setResults] = useState([]);
    const params = useParams();
    //console.log(params.searchTerm);
    useEffect( () => { findSearchResults(params.searchTerm).then(received => setResults(received))})
    return(
        <div className={"row"}>
            <div className={"col-2"}/>
            <div className={"col-10 my-3"}>
                <div className={"row"}>
                    {
                        results.map((item, key) => {
                            return <CatalogItem key={key} item={item} />
                        })
                    }
                </div>
            </div>
            <div className={"col-0"}/>
        </div>
    )
}
export default SearchResults;