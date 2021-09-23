import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter,
    useHistory
  } from "react-router-dom";
  import Alert from '@mui/material/Alert';
  import ReactLoading from 'react-loading';

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const [check, setCheck] = useState(false);
    const [error, setError] = useState(false);
    const [loadingStatus, setLoadingStatus] = useState(false);
    const history = useHistory();

    const checkUser = (e) => {
        e.preventDefault();
        const status = password === "";
        if (!status) {
            setLoadingStatus(true);
            fetch(`https://ehrsystembackend.herokuapp.com/KNH/staff/login?username=admin&&password=${password}`)
                .then(response => response.json())
                .then((data) => {
                    if (data.message == "Not Found") {
                        setLoadingStatus(false);
                        setError(true);
                        setCheck(false);
                    }
                    else{
                        setLoadingStatus(false);
                        setUser(data.data);
                        setCheck(true);
                        setError(false);
                        console.log(user);
                        setTimeout(() => {
                            history.push({pathname: '/dashboard', state: {userDetails: data.data}});
                        }, 4000);
                        
                    }
                })
                .catch((error) => {
                    setLoadingStatus(false);
                    console.log(error);
                });
        }
        else{
            alert("Enter Data");
        }

    }

    return (
        <div className="containerLogin">
            <div className="avatar">
                <img src="/knhlogo.jpg" className="imageLogo"/>
            </div>
            <h2 className="headingLogin">Sign In</h2>
            {error ? <Alert severity="error">Oops!!, Wrong password</Alert>: null}
            {check ? <Alert severity="success">Login Successfull!</Alert> : null}
            {loadingStatus ? <div className="loadRow"><ReactLoading type="spinningBubbles" color="blue" height={30} width={30} className="loadBalls"/></div> : null}
            <div className="inputs">
                <form className="formLogin" onSubmit={checkUser}>
                    <label className="labelText">Password</label><br/>
                    <input type="password" name="username" placeholder="Enter Password" required className="inputLogin" onChange={(e) => setPassword(e.target.value)}/><br/>
                    <button type="submit" className="btnSubmit">Submit</button><br/>
                </form>
            </div>
            <div className="right">
                <p href="" className="admin"><Link to="/" className="admin">Login as Staff</Link></p>
            </div>
        </div>
    )
}
