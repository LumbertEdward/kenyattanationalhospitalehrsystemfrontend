import React, {useState, useEffect} from 'react'
import './pending.css';
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

export default function PendingAccounts({user}) {
    const [accounts, setAccounts] = useState([]);
    const [pending, setPending] = useState([]);
    const [notification, setNotifications] = useState([]);
    const [staff, setStaff] = useState("");
    function notificationsLabel(count) {
        if (count === 0) {
          return 'no notifications';
        }
        if (count > 99) {
          return 'more than 99 notifications';
        }
        return `${count} notifications`;
      }

      const activateAccount = (e) => {
          e.preventDefault();

          if (staff !== "No") {
              console.log(staff);
            fetch(`https://ehrsystembackend.herokuapp.com/KNH/staff/${staff}/activate`)
            .then(response => response.json())
            .then((data) => {
                if (data.message == "Activated") {
                    console.log("activated")
                    fetchData();
                }
                else{
                    console.log("not activated");
                }
            })
          }
          else{
              console.log("no");
          }

      }

      const fetchData = () => {
            fetch("https://ehrsystembackend.herokuapp.com/KNH/staff/all")
            .then(response => response.json())
            .then((data) => {
                if (data.message == "Found") {
                    setAccounts(data.data);
                    setPending(accounts.filter((account) => (account.status == "pending")));
                }
                else{
                    console.log("no data");
                }
            })
      }

      useEffect(() => {
            fetch("https://ehrsystembackend.herokuapp.com/KNH/staff/all")
            .then(response => response.json())
            .then((data) => {
                if (data.message == "Found") {
                    setAccounts(data.data);
                    setPending(accounts.filter((account) => (account.status == "pending")));
                }
                else{
                    console.log("no data");
                }
            })

            //notifications
          fetch(`https://ehrsystembackend.herokuapp.com/KNH/staff/viewNotifications?id=${user.username}`)
          .then(response => response.json())
          .then((data) => {
              if (data.message == "Found") {
                  setNotifications(data.data);
              }
              else{
                  console.log("no Notification");
              }
          })
      })
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
                            Pending Accounts
                        </Link>
                    </Breadcrumbs>
                </div>
                <div className="pendingContainer">
                    <div className="titlePending">
                        <p className="titleTxt">Pending Accounts</p>
                    </div>
                    <div className="pendingTable">
                        <table className="tablePending">
                            <tr className="rowHead">
                                <th className="head">Username</th>
                                <th className="head">Qualification</th>
                                <th className="head">Department</th>
                                <th className="headUser">Activate</th>
                            </tr>
                            {pending.map((item) => (
                                <tr className="rowBody" key={item._id}>
                                <td className="headItem">{item.username}</td>
                                <td className="headItem">{item.qualification}</td>
                                <td className="headItem">{item.deprtment_id}</td>
                                <td className="headItemSelect">
                                    <div className="activate">
                                        <div className="innerActivate">
                                            <select className="selectActivate" onChange={(e) => setStaff(e.target.value)}>
                                                <option>select....</option>
                                                <option value={item._id}>Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                            <div className="checkIcon">
                                                <Tooltip title="submit">
                                                    <button className="btnCheck" type="submit" onClick={activateAccount}><DoneIcon /></button>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
