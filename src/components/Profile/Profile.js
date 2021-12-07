import React from "react";
import "../../vendors/bootstrap/bootstrap.min.css"
import "../../vendors/fontawesome/css/all.css"
import "./profile.css"
import { Route, Link } from "react-router-dom"

import BookmarkList from "./BookmarkList";
import FollowingList from "./FollowingList";
import CartList from "./CartList";
const ProfileTabs = (active) => {
    active = active.active;
    return (
        <ul className=" nav nav-pills justify-content-center mt-2">
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
        </ul>
    )
}
const Profile = () => {
    return (
        <div className="row">
            <div className="col-6 card">
                <h1>Profile is going here.</h1>
                <img className="profile-image" src="..." />
                <p>Username</p>
                <p> First Name Last Name </p>
                <p>Date of Birth</p>
            </div>
            <div className="col-6">
                <Route path={["/profile/bookmarks"]} exact={true}>
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
            </div>
        </div>
    )
}

export default Profile;