import React from 'react'
import './editstaff.css';
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
import EditIcon from '@mui/icons-material/Edit';

export default function EditStaff() {
    function notificationsLabel(count) {
        if (count === 0) {
          return 'no notifications';
        }
        if (count > 99) {
          return 'more than 99 notifications';
        }
        return `${count} notifications`;
      }
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
                                <Badge badgeContent={5} color="success" style={{height: "18px", width: "18px"}}>
                                    <NotificationsIcon className="iconColor" style={{height: "18px", width: "18px", color: "white"}}/>
                                </Badge>
                            </IconButton>
                            </Tooltip>
                        <p className="userName">Admin</p>
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
                            Edit Accounts
                        </Link>
                    </Breadcrumbs>
                </div>
                <div className="pendingContainer">
                    <div className="titlePending">
                        <p className="titleTxt">Edit Accounts</p>
                    </div>
                    <div className="pendingTable">
                        <table className="tablePending">
                            <tr className="rowHead">
                                <th className="head">Username</th>
                                <th className="head">Qualification</th>
                                <th className="head">Department</th>
                                <th className="headUser">Edit</th>
                            </tr>
                            <tr className="rowBody">
                                <td className="headItem">Tom Steve</td>
                                <td className="headItem">Doctor</td>
                                <td className="headItem">Accident and Emergency Department</td>
                                <td className="headItemSelect">
                                    <div className="activate">
                                        <div className="innerActivate">
                                            <div className="checkIcon">
                                                <Tooltip title="Edit">
                                                    <button className="btnCheck"><EditIcon /></button>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="rowBody">
                                <td className="headItem">Tom Steve</td>
                                <td className="headItem">Doctor</td>
                                <td className="headItem">Accident and Emergency Department</td>
                                <td className="headItemSelect">
                                    <div className="activate">
                                        <div className="innerActivate">
                                            <div className="checkIcon">
                                                <button className="btnCheck"><EditIcon /></button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="rowBody">
                                <td className="headItem">Tom Steve</td>
                                <td className="headItem">Doctor</td>
                                <td className="headItem">Accident and Emergency Department</td>
                                <td className="headItemSelect">
                                    <div className="activate">
                                        <div className="innerActivate">
                                            <div className="checkIcon">
                                                <button className="btnCheck"><EditIcon /></button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
