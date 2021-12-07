import React from "react";
import "../../vendors/bootstrap/bootstrap.min.css"
import "../../vendors/fontawesome/css/all.css"
import "./profile.css"
import { Route, Link } from "react-router-dom"

import BookmarkList from "./BookmarkList";
import FollowingList from "./FollowingList";
import CartList from "./CartList";

const Profile = () => {
    return (
        <div className="row container">
            <div className="col-6 card">
                <h1>Profile is going here.</h1>
                <img className="profile-image" src="..." />
                <p>Username</p>
                <p> First Name Last Name </p>
                <p>Date of Birth</p>
            </div>
            <div className="col-6">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <Link class="nav-link active" to="/profile/bookmarks">Bookmarks</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/profile/following">Following</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/profile/cart">Cart</Link>
                    </li>
                </ul>
                <Route path={["/profile/bookmarks"]} exact={true}>
                    <BookmarkList />
                </Route>
                <Route path={["/profile/following"]} exact={true}>
                    <FollowingList />
                </Route>
                <Route path={["/profile/cart"]} exact={true}>
                    <CartList />
                </Route>
            </div>
        </div>
    )
}

export default Profile;