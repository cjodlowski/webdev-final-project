import React from "react";
import "../../vendors/bootstrap/bootstrap.min.css"
import "../../vendors/fontawesome/css/all.css"
import "./profile.css"
import { Route, Link } from "react-router-dom"

import BookmarkList from "./BookmarkList";
import CartList from "./CartList";
import SellList from "./SellList";
import MakeItem from "../ItemDetails/MakeItem";

const ProfileTabs = (active) => {
    active = active.active;
    return (
        <div className={"card-header"}>
            <ul className="nav nav-tabs card-header-tabs justify-content-center">
                {/* TODO: Sophie help make this look good */}
                <li className={`nav-item`}>
                    <Link className= {` nav-link ${active === 'bookmarks' ? 'active' : ''}`} to="/profile/bookmarks">Bookmarks</Link>
                </li>
                <li className={`nav-item`}>
                    <Link className={`nav-link ${active === 'cart' ? 'active' : ''}`} to="/profile/cart">Cart</Link>
                </li>
                <li className={`nav-item`}>
                    <Link className={`nav-link ${active === 'selling' ? 'active' : ''}`} to="/profile/selling">Now Selling</Link>
                </li>
                <li className={`nav-item`}>
                    <Link className={`nav-link ${active === 'makeItem' ? 'active' : ''}`} to="/profile/makeItem">Create Item</Link>
                </li>
            </ul>
        </div>
    )
}
const Profile = () => {
    return (
        <div className="row mt-3">
            <div className="col-4 ms-3 me-1">
                <div className={"card bg-light card-profile-format override-bs"}>
                    <div className="card-header larger-text">Profile</div>
                    <img className="mt-2 profile-image d-block mx-auto border" src="/images/spooder.jpg" alt="profile icon"/>
                    <div className="d-flex flex-column card-body">
                        <h5 className="card-title d-flex justify-content-center">Username</h5>
                        <p className="card-text d-flex justify-content-center">First name</p>
                        <p className="card-text d-flex justify-content-center">Last name</p>
                        <p className="card-text d-flex justify-content-center">Date of birth</p>
                        <p className="card-text d-flex justify-content-center">Phone Number</p>
                        <a href="#" className="btn btn-primary mb-2">Edit</a>
                        <a href="#" className="btn btn-primary mb-2">Save</a>
                    </div>
                </div>
            </div>
            <div className="col-7 card bg-light profile-section override-bs px-0 mb-3 override-bs">
                <Route path={["/profile", "/profile/bookmarks"]} exact={true}>
                    <ProfileTabs active="bookmarks"/>
                    <BookmarkList />
                </Route>
                <Route path={["/profile/cart"]} exact={true}>
                    <ProfileTabs active="cart"/>
                    <CartList />
                </Route>
                <Route path={["/profile/selling"]} exact={true}>
                    <ProfileTabs active="selling"/>
                    <SellList />
                </Route>
                <Route path={["/profile/makeItem"]} exact={true}>
                    <ProfileTabs active="makeItem"/>
                    <MakeItem />
                </Route>
            </div>
        </div>
    )
}

export default Profile;