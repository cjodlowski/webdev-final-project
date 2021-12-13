import React from "react";
import "../../vendors/bootstrap/bootstrap.min.css"
import "../../vendors/fontawesome/css/all.css"
import "./profile.css"
import { Route, Link } from "react-router-dom"

import BookmarkList from "./BookmarkList";
import FollowingList from "./FollowingList";
import CartList from "./CartList";
import SellList from "./SellList";
const ProfileTabs = (active) => {
    active = active.active;
    return (
        <ul className=" nav nav-pills justify-content-center">
            {/* TODO: Sophie help make this look good */}
            <li className={`nav-item`}>
                <Link className= {` nav-link ${active === 'bookmarks' ? 'active' : ''}`} to="/profile/bookmarks">Bookmarks</Link>
            </li>
            <li className={`nav-item`}>
                <Link className={`nav-link ${active === 'following' ? 'active' : ''}`} to="/profile/following">Following</Link>
            </li>
            <li className={`nav-item`}>
                <Link className={`nav-link ${active === 'cart' ? 'active' : ''}`} to="/profile/cart">Cart</Link>
            </li>
            <li className={`nav-item`}>
                <Link className={`nav-link ${active === 'selling' ? 'active' : ''}`} to="/profile/selling">Now Selling</Link>
            </li>
        </ul>
    )
}
const Profile = () => {
    return (
        <div className="row">
            <div className="col-4 ms-2 mt-3">
                <div className={"card bg-secondary text-white card-profile-format override-bs"}>
                    <div className="card-header">Profile</div>
                    <img className="card-img-top profile-image" src="..." alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Username</h5>
                        <p className="card-text">First name</p>
                        <p className="card-text">Last name</p>
                        <p className="card-text">Date of birth</p>
                        <a href="#" className="btn btn-light me-2">Edit</a>
                        <a href="#" className="btn btn-light me-2">Save</a>
                    </div>
                </div>
            </div>
            <div className="col-7 mt-2 profile-section override-bs">
                <Route path={["/profile", "/profile/bookmarks"]} exact={true}>
                    <ProfileTabs active="bookmarks"/>
                    <BookmarkList />
                </Route>
                <Route path={["/profile/following"]} exact={true}>
                    <ProfileTabs active="following"/>
                    <FollowingList />
                </Route>
                <Route path={["/profile/cart"]} exact={true}>
                    <ProfileTabs active="cart"/>
                    <CartList />
                </Route>
                <Route path={["/profile/selling"]} exact={true}>
                    <ProfileTabs active="selling"/>
                    <SellList />
                </Route>
            </div>
        </div>
    )
}

export default Profile;