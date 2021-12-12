import React from "react";

const SignUp = () => {
    return (
        <div>
            <h2>Please SignUp Here</h2>
            <div class="form-group">
                <label for="exampleInputEmail1" class="form-label mt-4">Username</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div class="form-group">
                <label for="firstName" class="form-label mt-4">First Name</label>
                <input type="firstname" class="form-control" id="firstName" placeholder="First Name"/>
            </div>
            <div class="form-group">
                <label for="lastName" class="form-label mt-4">Last Name</label>
                <input type="lastname" class="form-control" id="lastName" placeholder="Last Name"/>
            </div>
            <div class="form-group">
                <label for="exampleSelect1" class="form-label mt-4">Example select</label>
                <select class="form-select" id="exampleSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div>
                {/* Add User in DB here */}
                <button onClick={() => { }}></button>
            </div>
            <Link to="/register">Click here to Sign Up instead</Link>
        </div>
    )
}

export default SignUp;