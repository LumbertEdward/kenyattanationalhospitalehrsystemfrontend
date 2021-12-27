import React, {useEffect, useState} from 'react'
import './all.css';
import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import ReactLoading from 'react-loading';
import Alert from '@mui/material/Alert';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

export default function AllPatients({user}) {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(false);
    const [rows, setRows] = useState([]);
    const [id, setId] = useState("");
    const [deleted, setDeleted] = useState(false);

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
            fetch("https://ehrsystembackend.herokuapp.com/KNH/patient/allpatients")
            .then(response => response.json())
            .then((data) => {
                if (data.message == "Patients Records available") {
                    setRows(data.data);
                    setLoading(true);
                    console.log(data);
                }
                else{
                setLoading(true);
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
          
      }, [])


    return (
        <div className="patientAllContainer">
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
                            <Link underline="hover" color="inherit" href="/">
                                Patients
                            </Link>
                            <Link
                            underline="hover"
                            color="text.primary"
                            href="#"
                            aria-current="page"
                            >
                                All Patients
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <div className="searchBox">
                        <div className="innerSearch">
                            <input type="text" placeholder="Enter ID" className="inSearch"/>
                            <button className="btnSearch">Search</button>
                        </div>
                    </div>
                    <div className="tableAllPatients">
                        <div className="tableStaff">
                        <div className="introTable" style={{backgroundColor: "#293846"}}>
                            Patients
                        </div>
                        <div className="innerTable">
                          {!loading ? <div className="loadRec"><ReactLoading type="spokes" color="blue" height={30} width={30} className="loadBalls"/></div> 
                          :
                          <>
                          {deleted ? <div className="alertOuter"><Alert severity="success" className="alert" style={{marginTop: "-20px"}}>Patient Deleted</Alert></div> : null}
                          <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell style={{fontWeight: "bold"}}>First Name</TableCell>
                                        <TableCell align="center" style={{fontWeight: "bold"}}>Last Name</TableCell>
                                        <TableCell align="center" style={{fontWeight: "bold"}}>Identity Number</TableCell>
                                        <TableCell align="center" style={{fontWeight: "bold"}}>Telephone</TableCell>
                                        <TableCell align="center" style={{fontWeight: "bold"}}>County</TableCell>
                                        <TableCell align="center" style={{fontWeight: "bold"}}>Action</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell component="th" scope="row">
                                            {row.firstname}
                                        </TableCell>
                                        <TableCell align="center">{row.lastname}</TableCell>
                                        <TableCell align="center">{row.identity_no}</TableCell>
                                        <TableCell align="center">{row.telephone}</TableCell>
                                        <TableCell align="center">{row.county}</TableCell>
                                        <TableCell align="center">
                                          <div className="innerItems">
                                            <Tooltip title="Edit Patient">
                                              <EditIcon className="editRec"/>
                                            </Tooltip>
                                            <Tooltip title="Delete Patient">
                                              <DeleteIcon className="deleteRec" onClick={() => {
                                                  setId(row._id);
                                                  if (id != null) {
                                                        fetch(`https://ehrsystembackend.herokuapp.com/KNH/patient/DeletePatientbyId?identity_no=${row.identity_no}`)
                                                        .then(response => response.json())
                                                        .then((data) => {
                                                            if (data.message == "Deleted") {
                                                                setDeleted(true);
                                                                setTimeout(() => {
                                                                    setDeleted(false);
                                                                }, 1000);
                                                                setRows([]);
                                                                fetch("https://ehrsystembackend.herokuapp.com/KNH/patient/allpatients")
                                                                    .then(response => response.json())
                                                                    .then((data) => {
                                                                        if (data.message == "Patients Records available") {
                                                                            setRows(data.data);
                                                                            setLoading(true);
                                                                            console.log(data);
                                                                        }
                                                                        else{
                                                                            setLoading(true);
                                                                            console.log("no data");
                                                                        }
                                                                    })
                                                            }
                                                            else{
                                                            setLoading(true);
                                                            console.log("no data");
                                                            }
                                                        })
                                                  }
                                              }}/>
                                            </Tooltip>
                                          </div>
                                        </TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
