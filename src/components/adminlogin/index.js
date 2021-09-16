import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter,
    useHistory
  } from "react-router-dom";

export default function AdminLogin() {
    return (
        <div className="containerLogin">
            <div className="avatar">
                <img src="/knhlogo.jpg" className="imageLogo"/>
            </div>
            <h2 className="headingLogin">Sign In</h2>
            <div className="inputs">
                <form method="post" className="formLogin">
                    <label className="labelText">Password</label><br/>
                    <input type="password" name="username" placeholder="Enter Password" className="inputLogin"/><br/>
                    <button type="submit" className="btnSubmit">Submit</button><br/>
                </form>
            </div>
            <div className="right">
                <p href="" className="admin"><Link to="/" className="admin">Login as Staff</Link></p>
            </div>
        </div>
    )
}
