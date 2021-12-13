import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className={"my-3 mx-3"}>
            <h2>Log in:</h2>
            <div className="form-group">
                <label for="exampleInputEmail1" className="form-label mt-4">Username</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div>
                {/* Update User in DB here */}
                <button onClick={() => {}} className={"btn btn-secondary my-2"}>Login</button>
            </div>
            <h3 className={"mt-3"}>Not an existing user?</h3>
            <Link to="/register"><p>Click here to sign up instead!</p></Link>
        </div>
    )
}

export default Login;