import React, {useState, useEffect} from 'react'
import './profile.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import DoneIcon from '@mui/icons-material/Done';
import Alert from '@mui/material/Alert';
import ReactLoading from 'react-loading';
const axios = require('axios').default;


export default function Profile({user}) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [residence, setResidence] = useState("");
    const [notification, setNotifications] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false);
    const [check, setCheck] = useState(false);
    const [error, setError] = useState(false);
    const [newUser, setNewUser] = useState([]);
    function notificationsLabel(count) {
        if (count === 0) {
          return 'no notifications';
        }
        if (count > 99) {
          return 'more than 99 notifications';
        }
        return `${count} notifications`;
      }

      const editStaff = (e) => {
          e.preventDefault();

          if (user._id !== null) {
                setLoadingStatus(true);
                fetch(`https://ehrsystembackend.herokuapp.com/KNH/staff/profile/edit?username=${user.username}&&firstname=${firstname}&&lastname=${lastname}&&residence=${residence}`)
                    .then(response => response.json())
                    .then((data) => {
                        console.log(data)
                        if (data.message != "Updated Successfully") {
                            setLoadingStatus(false);
                            setError(true);
                            setCheck(false);
                            setTimeout(() => {
                                setError(false);
                            }, 2000);
                        }
                        else{
                            setLoadingStatus(false);
                            setCheck(true);
                            setError(false);
                            setTimeout(() => {
                                setCheck(false);
                            }, 2000);
                        }
                    })
          }
          else{
              console.log("no user");
          }
      }

      useEffect(() => {
        //notifications
        fetch(`https://ehrsystembackend.herokuapp.com/KNH/staff/viewNotifications?id=${user.username}`)
        .then(response => response.json())
        .then((data) => {
            if (data.message == "Found") {
                setNotifications(data.data);
                console.log(data);
            }
            else{
                console.log("no Notification");
            }
        })
  }, [])
    return (
        <div className="bodyContainer">
            <div className="toolContainer">
                <div className="center">
                    <div className="search">
                        <p className="dashIntro">Dashboard</p>
                    </div>
                    <div className="rightIcons">
                        <Tooltip title="notifications">
                            <IconButton aria-label={notificationsLabel(1)} className="btnIcon" >
                                <Badge badgeContent={notification ? notification.length : 0} color="success" style={{height: "18px", width: "18px"}}>
                                    <NotificationsIcon className="iconColor" style={{height: "18px", width: "18px", color: "white"}}/>
                                </Badge>
                            </IconButton>
                            </Tooltip>
                        <p className="userName">{`${user.username}`}</p>
                        <Tooltip title="Profile">
                            <Avatar style={{height: "28px", width: "28px", backgroundColor: "white"}} className="avatar">
                                <PersonIcon style={{color: "black"}} />
                            </Avatar>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className="bodyAll">
                <div className="breadcrumps">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Home
                        </Link>
                        <Link
                        underline="hover"
                        color="text.primary"
                        href="#"
                        aria-current="page"
                        >
                            My Profile
                        </Link>
                    </Breadcrumbs>
                </div>
                {error ? <div className="alertOuter"><Alert severity="error" className="alert">Update Not Successful</Alert></div> : null}
                {check ? <div className="alertOuter"><Alert severity="success" className="alert">Update Successful</Alert></div> : null}
                <div className="pendingContainer">
                    <div className="titlePending">
                        <p className="titleTxt">My Profile</p>
                    </div>
                    <div className="profileBody">
                        <div className="profilePic">
                            <PersonIcon className="personProf"/>
                        </div>
                        {loadingStatus ? <div className="loadRowProf"><ReactLoading type="spinningBubbles" color="blue" height={30} width={30} className="loadBalls"/></div> : null}
                        <div className="profileDetails">
                            <form className="formProf">
                                <div className="nameSectionProf">
                                    <div className="firstNProf">
                                        <label className="labelRegisterProf">First Name</label><br/>
                                        <input type="text" name="firstname" placeholder={user.firstname} required className="inputRegisterProf" onChange={(e) => setFirstname(e.target.value)} />
                                    </div>
                                    <div className="lastNProf">
                                        <label className="labelRegisterProf">Last Name</label><br/>
                                        <input type="text" name="lastname" placeholder={user.lastname} required className="inputRegisterProf" onChange={(e) => setLastname(e.target.value)} />
                                    </div>
                                    <div className="userNProf">
                                        <label className="labelRegisterProf">Username</label><br/>
                                        <input type="text" name="username" disabled placeholder={user.username} className="inputRegisterProf" /><br/>
                                    </div>
                                </div>
                                <div className="nameSectionProf">
                                    <div className="firstNProf">
                                        <label className="labelRegisterProf">Qualification</label><br/>
                                        <input type="text" name="firstname" disabled placeholder={user.qualification} className="inputRegisterProf" />
                                    </div>
                                    <div className="lastNProf">
                                        <label className="labelRegisterProf">Department</label><br/>
                                        <input type="text" name="lastname" disabled placeholder={user.department_id} className="inputRegisterProf" />
                                    </div>
                                    <div className="userNProf">
                                        <label className="labelRegisterProf">Gender</label><br/>
                                        <input type="text" name="username" disabled placeholder={user.gender} className="inputRegisterProf" /><br/>
                                    </div>
                                </div>
                                <div className="nameSectionProf">
                                    <div className="firstNProf">
                                        <label className="labelRegisterProf">Residence</label><br/>
                                        <input type="text" name="firstname" placeholder={user.residence} className="inputRegisterProf" onChange={(e) => setResidence(e.target.value)} />
                                    </div>
                                    <div className="lastNProf">
                                        <label className="labelRegisterProf">Country</label><br/>
                                        <input type="text" name="lastname" disabled placeholder={user.country} className="inputRegisterProf" />
                                    </div>
                                    <div className="userNProf">
                                        <label className="labelRegisterProf">County</label><br/>
                                        <input type="text" name="username" disabled placeholder={user.county} className="inputRegisterProf" /><br/>
                                    </div>
                                </div>
                                <div className="nameSectionProf">
                                    <button className="btnProf" type="submit" onClick={editStaff}>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
