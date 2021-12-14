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
        <>
            <div className={"row"}>
                {
                    results.map((item, key) => {
                        //console.log(item);
                        return <CatalogItem key={key} item={item} />
                    })
                }
            </div>
        </>
    )
}
export default SearchResults;