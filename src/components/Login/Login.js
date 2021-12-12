import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h2>Please Login Here</h2>
            <div class="form-group">
                <label for="exampleInputEmail1" class="form-label mt-4">Username</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div>
                {/* Update User in DB here */}
                <button onClick={() => {}}>Login</button>
            </div>
            <Link to="/register">Click here to Sign Up instead</Link>
        </div>
    )
}

export default Login;