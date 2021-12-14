import React from "react";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className={"d-flex p-2"}>
            <div className={"col-3"}/>
            <div className={"container col-6"}>
                <div className={"mx-3 my-3 card bg-light px-3 py-3"}>
                    <h2>Sign up:</h2>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className="form-label mt-1">Username</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Your first and last name</label>
                        <input type="firstname" className="form-control mb-2" id="firstName" placeholder="First name"/>
                        <input type="lastname" className="form-control" id="lastName" placeholder="Last name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formFile" className="form-label mt-4">Profile picture</label>
                        <input className="form-control" type="file" id="formFile"/>
                    </div>
                    <fieldset className="form-group">
                        <legend className="mt-4">I am a:</legend>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios"
                                       id="optionsRadios1" value="option1"/>
                                    Customer
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"/>
                                    Seller
                            </label>
                        </div>
                    </fieldset>
                    <div>
                        {/* Add User in DB here */}
                        <button className={"btn btn-secondary mt-2"} onClick={() => { }}>Sign up</button>
                    </div>
                    <h3 className={"mt-3 mb-2"}>Already an existing user?</h3>
                    <Link to="/login"><p>Click here to log in instead!</p></Link>
                </div>
            </div>
            <div className={"col-3"}/>
        </div>
    )
}

export default SignUp;