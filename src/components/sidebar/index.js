import React from 'react'
import './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, Redirect } from 'react-router-dom';
import GppGoodIcon from '@mui/icons-material/GppGood';
import PanToolIcon from '@mui/icons-material/PanTool';
import EditIcon from '@mui/icons-material/Edit';
import ViewListIcon from '@mui/icons-material/ViewList';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar({user, change}) {


    const changeToLogin = () => {
        change(true);
    }

    return (
        <div className="sideContainer">
            <div className="sideBar">
                <div className="centerBar">
                    <div className="topBar">
                        <img src="/knhlogo.jpg" className="logoDash"/>
                        <p className="name">{`Welcome ${user.username}`}</p>
                    </div>
                </div>
                <hr className="line"/>
                {user.username == "admin" ? <><div className="options">
                    <ul className="unordered">
                        <li className="optionOne active">
                            <DashboardIcon className="lnk" style={{height: "18px", width: "18px", marginRight: "15px"}}/>
                            <p className="iconName" style={{fontWeight: "bold", paddingRight: "26px", fontSize: "14px"}}><Link to="/dashboard/" className="lnk">Dashboard</Link></p>
                        </li>
                    </ul>
                </div>
                <p className="titleList" style={{fontWeight: "bold", marginTop: "10px", color: "gray"}}>Staff</p>
                <div className="options">
                    <ul className="unordered">
                        <li className="optionOne">
                            <ViewListIcon className="lnk" style={{height: "18px", width: "18px", marginRight: "15px"}}/>
                            <p className="iconName" style={{paddingRight: "26px", fontSize: "14px", fontWeight: "bold"}}><Link to="/view" className="lnk">View Staff</Link></p>
                        </li>
                        <li className="optionOne">
                            <EditIcon className="lnk" style={{height: "18px", width: "18px", marginRight: "15px"}}/>
                            <p className="iconName" style={{paddingRight: "26px", fontSize: "14px", fontWeight: "bold"}}><Link to="/edit" className="lnk">Edit Staff</Link></p>
                        </li>
                    </ul>
                </div>
                <p className="titleList" style={{fontWeight: "bold", marginTop: "10px", color: "gray"}}>Accounts</p>
                <div className="options">
                    <ul className="unordered">
                        <li className="optionOne">
                            <GppGoodIcon className="lnk" style={{height: "18px", width: "18px", marginRight: "15px"}}/>
                            <p className="iconName" style={{paddingRight: "26px", fontSize: "14px", fontWeight: "bold"}}><Link to="/activated" className="lnk">Activated</Link></p>
                        </li>
                        <li className="optionOne">
                            <PanToolIcon className="lnk" style={{height: "18px", width: "18px", marginRight: "15px"}}/>
                            <p className="iconName" style={{paddingRight: "26px", fontSize: "14px", fontWeight: "bold"}}><Link to="/pending" className="lnk">Pending</Link></p>
                        </li>
                        <li className="optionOne">
                            <ReportGmailerrorredIcon className="lnk" style={{height: "18px", width: "18px", marginRight: "15px"}}/>
                            <p className="iconName" style={{paddingRight: "26px", fontSize: "14px", fontWeight: "bold"}}><Link to="/suspended" className="lnk">Suspended</Link></p>
                        </li>
                    </ul>
                </div>
                <p className="titleList" style={{fontWeight: "bold", marginTop: "10px", color: "gray"}}>Profile</p>
                <div className="options">
                    <ul className="unordered">
                        <li className="optionOne">
                            <AccountBoxIcon className="lnk" style={{height: "18px", width: "18px", marginRight: "15px"}}/>
                            <p className="iconName" style={{paddingRight: "26px", fontSize: "14px", fontWeight: "bold"}}><Link to="/profile" className="lnk">My Profile</Link></p>
                        </li>
                        <li className="optionOne">
                            <LogoutIcon className="lnk" style={{height: "18px", width: "18px", marginRight: "15px"}}/>
                            <p className="iconName" style={{paddingRight: "26px", fontSize: "14px", fontWeight: "bold", cursor: "pointer"}} onClick={changeToLogin}>Log Out</p>
                        </li>
                    </ul>
                </div>
                </> : null}
            </div>
        </div>
    )
}
