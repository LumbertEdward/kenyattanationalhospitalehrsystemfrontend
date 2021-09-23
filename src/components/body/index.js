import React, {useState, useEffect} from 'react'
import './body.css';
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

export default function Body({user}) {
    const [rows, setRows] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [pending, setPending] = useState([]);
    const [activated, setActivated] = useState([]);
    const [blocked, setBlocked] = useState([])
    function notificationsLabel(count) {
        if (count === 0) {
          return 'no notifications';
        }
        if (count > 99) {
          return 'more than 99 notifications';
        }
        return `${count} notifications`;
      }

      useEffect(() => {
          fetch("https://ehrsystembackend.herokuapp.com/KNH/staff/all")
          .then(response => response.json())
          .then((data) => {
              if (data.message == "Found") {
                  setRows(data.data);
                  setPending(rows.filter((row) => (row.status == "pending")));
                  setActivated(rows.filter((row) => (row.status == "activated")));
                  setBlocked(rows.filter((row) => (row.status == "suspended")))
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
                  console.log(data);
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
                                <Badge badgeContent={notifications ? notifications.length: 0} color="success" style={{height: "18px", width: "18px"}}>
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
                            Dashboard
                        </Link>
                    </Breadcrumbs>
                </div>
                <div className="boxesContainer">
                    <div className="row1">
                        <div className="boxes">
                            <div className="box1">
                                <div className="boxTop">
                                    <div className="boxContent">
                                        <GroupIcon className="notContent" style={{height: "40px", width: "40px"}}/>
                                    </div>
                                    <div className="boxText">
                                        <p className="boxName">Total Employees</p>
                                        <h2 className="boxValue">{rows ? rows.length: 0}</h2>
                                    </div>
                                </div>
                                <hr className="lineBox" />
                                <div className="boxBot">
                                    <AccessTimeIcon className="notBot" style={{height: "16px", width: "16px"}}/>
                                    <p className="txtUpdate">updated 4 minutes ago</p>
                                </div>
                            </div>
                            <div className="box1">
                                <div className="boxTop">
                                    <div className="boxContent" style={{backgroundColor: "brown"}}>
                                        <AccountBoxIcon className="notContent" style={{height: "40px", width: "40px"}}/>
                                    </div>
                                    <div className="boxText">
                                        <p className="boxName">Pending Accounts</p>
                                        <h2 className="boxValue">{pending ? pending.length : 0}</h2>
                                    </div>
                                </div>
                                <hr className="lineBox" />
                                <div className="boxBot">
                                    <AccessTimeIcon className="notBot" style={{height: "16px", width: "16px"}}/>
                                    <p className="txtUpdate">updated 4 minutes ago</p>
                                </div>
                            </div>
                            <div className="box1">
                                <div className="boxTop">
                                    <div className="boxContent" style={{backgroundColor: "green"}}>
                                        <AccountBoxIcon className="notContent" style={{height: "40px", width: "40px"}}/>
                                    </div>
                                    <div className="boxText">
                                        <p className="boxName">Activated Accounts</p>
                                        <h2 className="boxValue">{activated ? activated.length : 0}</h2>
                                    </div>
                                </div>
                                <hr className="lineBox" />
                                <div className="boxBot">
                                    <AccessTimeIcon className="notBot" style={{height: "16px", width: "16px"}}/>
                                    <p className="txtUpdate">updated 4 minutes ago</p>
                                </div>
                            </div>
                            <div className="box1">
                                <div className="boxTop">
                                    <div className="boxContent" style={{backgroundColor: "red"}}>
                                        <AccountBoxIcon className="notContent" style={{height: "40px", width: "40px"}}/>
                                    </div>
                                    <div className="boxText">
                                        <p className="boxName">Blocked Accounts</p>
                                        <h2 className="boxValue">{blocked ? blocked.length : 0}</h2>
                                    </div>
                                </div>
                                <hr className="lineBox" />
                                <div className="boxBot">
                                    <AccessTimeIcon className="notBot" style={{height: "16px", width: "16px"}}/>
                                    <p className="txtUpdate">updated 4 minutes ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="sect1">
                            <div className="tableStaff">
                                <div className="introTable">
                                    Hospital Staff
                                </div>
                                <div className="innerTable">
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                            <TableRow>
                                                <TableCell style={{fontWeight: "bold"}}>Staff Username</TableCell>
                                                <TableCell align="center" style={{fontWeight: "bold"}}>Qualification</TableCell>
                                                <TableCell align="center" style={{fontWeight: "bold"}}>Department</TableCell>
                                                <TableCell align="center" style={{fontWeight: "bold"}}>Residence</TableCell>
                                                <TableCell align="center" style={{fontWeight: "bold"}}>Date Approved</TableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                key={row._id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                <TableCell component="th" scope="row">
                                                    {row.username}
                                                </TableCell>
                                                <TableCell align="center">{row.qualification}</TableCell>
                                                <TableCell align="center">{row.department_id}</TableCell>
                                                <TableCell align="center">{row.residence}</TableCell>
                                                <TableCell align="center">{row.added_on}</TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                        </div>
                        <div className="sect2">
                            <div className="notifications">
                                <div className="introNotification">
                                    Notifications
                                </div>
                                <div className="notificationBody">
                                    <ul className="ulNot">
                                        {notifications.map((notification) => (
                                            <li className="notItem" key={notification._id}>
                                                <div>
                                                    <p className="notText">{notification.message}</p>
                                                    <p className="notTime">{notification.time}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
