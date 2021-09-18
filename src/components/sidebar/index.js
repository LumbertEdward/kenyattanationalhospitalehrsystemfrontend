import React from 'react'
import './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import GppGoodIcon from '@mui/icons-material/GppGood';
import PanToolIcon from '@mui/icons-material/PanTool';
import EditIcon from '@mui/icons-material/Edit';
import ViewListIcon from '@mui/icons-material/ViewList';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

export default function Sidebar() {
    return (
        <div className="sideContainer">
            <div className="sideBar">
                <div className="centerBar">
                    <div className="topBar">
                        <img src="/knhlogo.jpg" className="logoDash"/>
                        <p className="name">Welcome Admin</p>
                    </div>
                </div>
                <hr className="line"/>
                <div className="options">
                    <ul classname="unordered">
                        <li className="optionOne active">
                            <DashboardIcon classname="lnk" style={{height: "18px", width: "18px", marginRight: "15px"}}/>
                            <p classname="iconName" style={{fontWeight: "bold", paddingRight: "26px", fontSize: "14px"}}><Link to="/dashboard/" className="lnk">Dashboard</Link></p>
                        </li>
                    </ul>
                </div>
                <p classname="titleList" style={{fontWeight: "bold", marginTop: "10px", color: "gray"}}>Staff</p>
                <div className="options">
                    <ul classname="unordered">
                        <li className="optionOne">
                            <ViewListIcon classname="lnk" style={{height: "18px", width: "18px", marginRight: "15px"}}/>
                            <p classname="iconName" style={{paddingRight: "26px", fontSize: "14px", fontWeight: "bold"}}><Link to="/view" className="lnk">View Staff</Link></p>
                        </li>
                        <li className="optionOne">
                            <EditIcon classname="lnk" style={{height: "18px", width: "18px", marginRight: "15px"}}/>
                            <p classname="iconName" style={{paddingRight: "26px", fontSize: "14px", fontWeight: "bold"}}><Link to="/edit" className="lnk">Edit Staff</Link></p>
                        </li>
                    </ul>
                </div>
                <p classname="titleList" style={{fontWeight: "bold", marginTop: "10px", color: "gray"}}>Accounts</p>
                <div className="options">
                    <ul classname="unordered">
                        <li className="optionOne">
                            <GppGoodIcon classname="lnk" style={{height: "18px", width: "18px", marginRight: "15px"}}/>
                            <p classname="iconName" style={{paddingRight: "26px", fontSize: "14px", fontWeight: "bold"}}><Link to="/activated" className="lnk">Activated</Link></p>
                        </li>
                        <li className="optionOne">
                            <PanToolIcon classname="lnk" style={{height: "18px", width: "18px", marginRight: "15px"}}/>
                            <p classname="iconName" style={{paddingRight: "26px", fontSize: "14px", fontWeight: "bold"}}><Link to="/pending" className="lnk">Pending</Link></p>
                        </li>
                        <li className="optionOne">
                            <ReportGmailerrorredIcon classname="lnk" style={{height: "18px", width: "18px", marginRight: "15px"}}/>
                            <p classname="iconName" style={{paddingRight: "26px", fontSize: "14px", fontWeight: "bold"}}><Link to="/suspended" className="lnk">Suspended</Link></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
