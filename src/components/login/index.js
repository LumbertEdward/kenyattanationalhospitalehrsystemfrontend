import { useState, useEffect } from 'react'
import './logincard.css';
import Alert from '@mui/material/Alert';
import {
    Link,
    useHistory
  } from "react-router-dom";
  const axios = require('axios').default;

export default function LoginCard() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const [check, setCheck] = useState(false);
    const [error, setError] = useState(false);
    const history = useHistory();

    const checkUser = (e) => {
        e.preventDefault();
        const status = username === "" || password === "";
        if (!status) {
            console.log("Right");
            fetch(`https://ehrsystembackend.herokuapp.com/KNH/staff/login?username=${username}&&password=${password}`)
                .then(response => response.json())
                .then((data) => {
                    if (data.message == "Not Found") {
                        setError(true);
                        setCheck(false);
                    }
                    else{
                        setUser(data.data);
                        setCheck(true);
                        setError(false);
                        console.log(user);
                        setTimeout(() => {
                            history.push({pathname: '/dashboard', state: {userDetails: data.data}});
                        }, 3000);
                        
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else{
            alert("Enter Data");
        }

    }

    useEffect(() => {
        
    }, [])

    return (
        <>
        <div className="containerLogin">
            <div className="avatar">
                <img src="/knhlogo.jpg" className="imageLogo"/>
            </div>
            <h2 className="headingLogin">Sign In</h2>
            {error ? <Alert severity="error">Oops!!, Wrong username or password</Alert>: null}
            {check ? <Alert severity="success">Login Successfull!</Alert> : null}
            <div className="inputs">
                <form className="formLogin" onSubmit={checkUser}>
                    <label className="labelText">Username</label><br/>
                    <input type="text" name="username" placeholder="Enter Username" required className="inputLogin" onChange={(e) => setUsername(e.target.value)} /><br/>
                    <label className="labelText">Password</label><br/>
                    <input type="password" name="username" placeholder="Enter Password" required className="inputLogin" onChange={(e) => setPassword(e.target.value)}/><br/>
                    <button type="submit" className="btnSubmit">Submit</button><br/>
                </form>
            </div>
            <div className="right">
                <p className="account"><Link to="/register" className="admin">Don't have an account?</Link></p>
                <p className="admin"><Link to="/admin/login" className="admin">Login as admin</Link></p>
            </div>
        </div>
        </>
    )
}
