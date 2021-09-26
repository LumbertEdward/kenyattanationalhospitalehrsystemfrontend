import React, {useState, useEffect} from 'react'
import './home.css'
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
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';

export default function ReceptionistHome({user}) {
    const [notifications, setNotifications] = useState([]);

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
        <div className="homeAppContainer">
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
                                <Link to="/profile"><PersonIcon style={{color: "black"}}/></Link>
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
                <div className="receptionAll">
                    <div className="itemOne">
                        <p className="titleItem">Number of Appointments</p>
                        <p className="totalItem">300</p>
                        <div className="iconBelow"><NoteAltOutlinedIcon className="noteIcon" style={{color: "blue"}} /></div>
                    </div>
                    <div className="itemOne">
                        <p className="titleItem">Pending Appointments</p>
                        <p className="totalItem">300</p>
                        <div className="iconBelow"><PanToolOutlinedIcon className="noteIcon" style={{color: "red"}}/></div>
                    </div>
                    <div className="itemOne">
                        <p className="titleItem">Approved Appointments</p>
                        <p className="totalItem">300</p>
                        <div className="iconBelow"><GppGoodOutlinedIcon className="noteIcon" style={{color: "green"}} /></div>
                    </div>
                </div>
                <div>
                    hello
                </div>
            </div>
        </div>
    )
}
