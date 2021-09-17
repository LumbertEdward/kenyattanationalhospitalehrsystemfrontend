import { useState, useEffect } from 'react'
import './register.css';
import Alert from '@mui/material/Alert';
import {
    Link,
    useHistory
  } from "react-router-dom";
  const axios = require('axios').default;

export default function Register() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [qualification, setQualification] = useState("");
    const [department_id, setDepartmentId] = useState("");
    const [access_level, setAccessLevel] = useState("");
    const [country, setCountry] = useState("");
    const [county, setCounty] = useState("");
    const [residence, setResidence] = useState("");
    const [joining_date, setJoiningDate] = useState("");
    const [added_on, setAddedOn] = useState("");
    const [added_by, setAddedBy] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    
    const [check, setCheck] = useState(false);
    const [error, setError] = useState(false);
    const history = useHistory();

    const checkUser = (e) => {
        e.preventDefault();

        const pass = password === confirmpassword;

        if (pass) {

            const staffDetails = {
                username: username,
                firstname: firstname,
                lastname: lastname,
                gender: gender,
                qualification: qualification,
                department_id: department_id,
                access_level: access_level,
                country: country,
                county: county,
                residence: residence,
                joining_date: joining_date,
                password: password,
                added_on: added_on,
                added_by: added_by,
            }

            const formData = new FormData()
            formData.append("firstname", firstname)
            formData.append("lastname", lastname)
            formData.append("username", username)
            formData.append("qualification", qualification)
            formData.append("department_id", department_id)
            formData.append("access_level", access_level)
            formData.append("country", country);
            formData.append("county", county);
            formData.append("residence", residence);
            formData.append("joining_date", joining_date);
            formData.append("added_on", added_on);
            formData.append("added_by", added_by);
            formData.append("gender", gender);
            formData.append("password", password);


            console.log("Right");
            console.log(added_on);
            axios({
                method: 'post',
                url: 'https://ehrsystembackend.herokuapp.com/KNH/staff/register',
                data: staffDetails})
                .then((data) => {
                    if (data.data.message != "Inserted Successfully") {
                        setError(true);
                        setCheck(false);
                    }
                    else{
                        setCheck(true);
                        setError(false);
                        setTimeout(() => {
                            history.push({pathname: '/'});
                        }, 4000);
                        
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else{
            console.log("Passwords not matching");
        }
    }

    return (
        <>
        <div className="containerRegister">
            <div className="avatar">
                <img src="/knhlogo.jpg" className="imageLogo"/>
            </div>
            <h2 className="headingRegister">Sign Up</h2>
            {error ? <Alert severity="error">Oops!!, Registration Not Successfull</Alert>: null}
            {check ? <Alert severity="success">Registration Successfull!</Alert> : null}
            <div className="inputs">
                <form className="formLogin" onSubmit={checkUser}>
                    <div className="nameSection">
                        <div className="firstN">
                            <label className="labelRegister">First Name</label><br/>
                            <input type="text" name="firstname" placeholder="Enter First Name" required className="inputRegister" onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div className="lastN">
                            <label className="labelRegister">Last Name</label><br/>
                            <input type="text" name="lastname" placeholder="Enter Last Name" required className="inputRegister" onChange={(e) => setLastname(e.target.value)} />
                        </div>
                        <div className="userN">
                            <label className="labelRegister">Username</label><br/>
                            <input type="text" name="username" placeholder="Enter Username" required className="inputLogin" onChange={(e) => setUsername(e.target.value)} /><br/>
                        </div>
                    </div>
                    
                    <div className="nameSection">
                        <div className="firstN">
                            <label className="labelText">Qualification</label><br/>
                            <select className="inputSelect" onChange={(e) => {setQualification(e.target.value); setAccessLevel(e.target.value)}}>
                                <option value="Doctor">Doctor</option>
                                <option value="Nurse">Nurse</option>
                                <option value="Pharmacist">Pharmacist</option>
                                <option value="Receptionist">Receptionist</option>
                                <option value="Lab Technician">Lab Technician</option>
                            </select>
                        </div>
                        <div className="lastN">
                            <label className="labelText">Select Department</label><br/>
                            <select className="inputSelect" onChange={(e) => setDepartmentId(e.target.value)}>
                                <option value="1">Nursing Department</option>
                                <option value="2">Mental Health Department</option>
                                <option value="3">Accident and Emergency Department</option>
                                <option value="4">Infection, Prevention and Control Department</option>
                                <option value="5">Nutrition Department</option>
                            </select>
                        </div>
                        <div className="userN">
                            <label className="labelText">Select Gender</label><br/>
                            <select className="inputSelect" onChange={(e) => setGender(e.target.value)}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="nameSection" style={{marginTop: "17px"}}>
                        <div className="firstN">
                            <label className="labelText">Residence</label><br/>
                            <input type="text" name="residence" placeholder="Enter Residence" required className="inputRegister" onChange={(e) => setResidence(e.target.value)} /><br/>
                        </div>
                        <div className="lastN">
                            <label className="labelText">Joining Date</label><br/>
                            <input type="date" name="joiningdate" placeholder="Enter Joining Date" required className="inputRegister" onChange={(e) => setJoiningDate(e.target.value)} /><br/>
                        </div>
                        <div className="userN">
                            <label className="labelText">Residence</label><br/>
                            <input type="text" name="residence" placeholder="Enter Residence" required className="inputRegister" onChange={(e) => setResidence(e.target.value)} /><br/>
                        </div>
                    </div>
                    
                    <div className="nameSection" style={{marginTop: "17px"}}>
                        <div className="firstN">
                            <label className="labelText">Select County</label><br/>
                            <select className="inputSelect" onChange={(e) => setCounty(e.target.value)}>
                                <option value="Nairobi">Nairobi</option>
                                <option value="Kisumu">Kisumu</option>
                                <option value="3">Accident and Emergency Department</option>
                                <option value="4">Infection, Prevention and Control Department</option>
                                <option value="5">Nutrition Department</option>
                            </select>
                        </div>
                        <div className="lastN">
                            <label className="labelText">Select Country</label><br/>
                            <select className="inputSelect" onChange={(e) => setCountry(e.target.value)}>
                                <option value="Kenya">Kenya</option>
                                <option>Mental Health Department</option>
                                <option>Accident and Emergency Department</option>
                                <option>Infection, Prevention and Control Department</option>
                                <option>Nutrition Department</option>
                            </select>
                        </div>
                        <div className="userN">
                            <label className="labelText">Password</label><br/>
                            <input type="password" name="password" placeholder="Enter Password" required className="inputLogin" onChange={(e) => setPassword(e.target.value)}/><br/>
                        </div>
                    </div>

                    <div className="nameSection">
                        <div className="firstN">
                            <label className="labelText">Confirm Password</label><br/>
                            <input type="password" name="confirmpassword" placeholder="Confirm Password" required className="inputRegister" onChange={(e) => setConfirmPassword(e.target.value)}/><br/>
                        </div>
                    </div>
                    <button type="submit" className="btnSubmitRegister">Submit</button><br/>
                </form>
            </div>
            <div className="rightRegister">
                <p className="admin"><Link to="/" className="admin">Already have an account?</Link></p>
            </div>
        </div>
        </>
    )
}
