import React from 'react'
import './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, Redirect, useHistory } from 'react-router-dom';
import GppGoodIcon from '@mui/icons-material/GppGood';
import PanToolIcon from '@mui/icons-material/PanTool';
import EditIcon from '@mui/icons-material/Edit';
import ViewListIcon from '@mui/icons-material/ViewList';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MedicationIcon from '@mui/icons-material/Medication';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';

export default function Sidebar({user, change}) {
    const history = useHistory();

    const goToProfile = () => {
        history.push('/profile');
    }

    const changeToLogin = () => {
        change(true);
    }

    return (
        <div className="sideContainer">
            <div className="sideBar">
                <div className="centerBar">
                    <div className="topBar">
                        <div className="logoHolder"><img src="/knhlogo.jpg" className="logoDash"/></div>
                        <p className="name">{`Welcome ${user.username}`}</p>
                    </div>
                </div>
                <hr className="line"/>
                {user.access_level == "admin" ? <><div className="options">
                    <ul className="unordered">
                        <li className="optionOne active">
                            <DashboardIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/dashboard/" className="lnk">Dashboard</Link></p>
                        </li>
                    </ul>
                </div>
                <p className="titleList" style={{fontWeight: "bold", marginTop: "10px", color: "gray"}}>Staff</p>
                <div className="options">
                    <ul className="unordered">
                        <li className="optionOne">
                            <ViewListIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/view" className="lnk">View Staff</Link></p>
                        </li>
                        <li className="optionOne">
                            <EditIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/edit" className="lnk">Edit Staff</Link></p>
                        </li>
                    </ul>
                </div>
                <p className="titleList" style={{fontWeight: "bold", marginTop: "10px", color: "gray"}}>Accounts</p>
                <div className="options">
                    <ul className="unordered">
                        <li className="optionOne">
                            <GppGoodIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/activated" className="lnk">Activated</Link></p>
                        </li>
                        <li className="optionOne">
                            <PanToolIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/pending" className="lnk">Pending</Link></p>
                        </li>
                        <li className="optionOne">
                            <ReportGmailerrorredIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/suspended" className="lnk">Suspended</Link></p>
                        </li>
                    </ul>
                </div>
                <p className="titleList" style={{fontWeight: "bold", marginTop: "10px", color: "gray"}}>Profile</p>
                <div className="options">
                    <ul className="unordered">
                        <li className="optionOne">
                            <AccountBoxIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/profile" className="lnk">My Profile</Link></p>
                        </li>
                        <li className="optionOne">
                            <LogoutIcon className="lnkIcon"/>
                            <p className="iconName" onClick={changeToLogin}>Log Out</p>
                        </li>
                    </ul>
                </div>
                </> 
                : 
                <><div className="options">
                    <ul className="unordered">
                        <li className="optionOne active">
                            <DashboardIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/dashboard/" className="lnk">Dashboard</Link></p>
                        </li>
                    </ul>
                </div>
                <p className="titleList" style={{fontWeight: "bold", marginTop: "10px", color: "gray"}}>Appointments</p>
                <div className="options">
                    <ul className="unordered">
                        <li className="optionOne">
                            <EditIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/addAppointment" className="lnk">New</Link></p>
                        </li>
                        <li className="optionOne">
                            <GppGoodIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/approvedAppointments" className="lnk">Approved</Link></p>
                        </li>
                        <li className="optionOne">
                            <PanToolIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/pendingAppointments" className="lnk">Pending</Link></p>
                        </li>
                    </ul>
                </div>
                <p className="titleList" style={{fontWeight: "bold", marginTop: "10px", color: "gray"}}>Patients</p>
                <div className="options">
                    <ul className="unordered">
                        <li className="optionOne">
                            <AddIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/newPatient" className="lnk">New Patient</Link></p>
                        </li>
                        <li className="optionOne">
                            <GroupIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/allPatients" className="lnk">All patients</Link></p>
                        </li>
                    </ul>
                </div>
                <p className="titleList" style={{fontWeight: "bold", marginTop: "10px", color: "gray"}}>Payments</p>
                <div className="options">
                    <ul className="unordered">
                        <li className="optionOne">
                            <PaymentIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/makePayment" className="lnk">Make Payment</Link></p>
                        </li>
                        <li className="optionOne">
                            <ReceiptIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/allPayments" className="lnk">All Payments</Link></p>
                        </li>
                    </ul>
                </div>
                <p className="titleList" style={{fontWeight: "bold", marginTop: "10px", color: "gray"}}>My Reports</p>
                <div className="options">
                    <ul className="unordered">
                        <li className="optionOne">
                            <AccountBalanceWalletIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/billingReports" className="lnk">Billing Reports</Link></p>
                        </li>
                        <li className="optionOne">
                            <MedicationIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/treatmentReports" className="lnk">Treatment Reports</Link></p>
                        </li>
                        <li className="optionOne">
                            <AssignmentIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/labReports" className="lnk">Lab Test Reports</Link></p>
                        </li>
                        <li className="optionOne">
                            <LocalPharmacyIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/drugReports" className="lnk">Drug Dispensing Reports</Link></p>
                        </li>
                    </ul>
                </div>
                <p className="titleList" style={{fontWeight: "bold", marginTop: "10px", color: "gray"}}>Profile</p>
                <div className="options">
                    <ul className="unordered">
                        <li className="optionOne">
                            <AccountBoxIcon className="lnkIcon"/>
                            <p className="iconName"><Link to="/profile" className="lnk">My Profile</Link></p>
                        </li>
                        <li className="optionOne">
                            <LogoutIcon className="lnkIcon"/>
                            <p className="iconName" onClick={changeToLogin}>Log Out</p>
                        </li>
                    </ul>
                </div>
                </>}
            </div>
        </div>
    )
}
