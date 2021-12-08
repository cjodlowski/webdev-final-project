import React from "react";


const CatalogItem = () => {
    return(
        <>
            <div className={"card border-secondary card-format override-bs"}>
                <div className="card-header">Header</div>
                <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title
                        and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-secondary me-2">Add to cart</a>
                    <a href="#" className="btn btn-secondary me-2">Bookmark</a>
                </div>
            </div>
        </>
    )
}

export default CatalogItem;