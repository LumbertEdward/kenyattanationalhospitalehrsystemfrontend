import {react, useState, useEffect} from 'react'
import { useHistory, useLocation } from 'react-router'
import { ActivatedAccounts, Body, PendingAccounts, Profile, Sidebar, Suspended, ViewStaff, LoginCard, ReceptionistHome, AddAppointment, ApprovedAppointments, PendingAppointments, NewPatient, AllPatients, MakePayment, AllPayments, BillingReport, TreatmentReport, LabReport, DrugDispensingReport } from '../../components';
import './dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import EditStaff from '../../components/editstaff';

export default function Dashboard() {
    const location = useLocation();
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");
    const [user, setUser] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [login, setLogin] = useState(false);

    useEffect(() => {
        fetch(`https://ehrsystembackend.herokuapp.com/KNH/staff/viewNotifications?id=${user.username}`)
          .then(response => response.json())
          .then((data) => {
              if (data.message == "Found") {
                  setNotifications(data.data);
                  console.log(data.data);
              }
              else{
                  console.log("no Notification");
              }
          })

        if (location.state != null) {
            setUsername(location.state.userDetails.username);
            setId(location.state.userDetails._id)
            setUser(location.state.userDetails);
        }
        else{
            history.push({pathname: "/"});
        }

    }, [])
    return (
        <div className="dashContainer">
            <div className="dashInner">
            {!login ? <Router>
                    {user.username ? <Sidebar user={user} change={setLogin}/> : null}
                    {user.access_level == "admin" ? <><Route path="/dashboard/" exact>
                        <Body user={user}/>
                    </Route>
                    <Route path="/view" exact>
                        <ViewStaff user={user} notification={notifications}/>
                    </Route>
                    <Route path="/edit" exact>
                        <EditStaff user={user}notification={notifications}/>
                    </Route>
                    <Route path="/activated" exact>
                        <ActivatedAccounts user={user} notification={notifications}/>
                    </Route>
                    <Route path="/pending" exact>
                        <PendingAccounts user={user} notification={notifications}/>
                    </Route>
                    <Route path="/suspended" exact>
                        <Suspended user={user} notification={notifications}/>
                    </Route>
                    <Route path="/profile" exact>
                        <Profile user={user}/>
                    </Route>
                    </> 
                    :
                    <><Route path="/dashboard/" exact>
                        <ReceptionistHome user={user}/>
                    </Route>
                    <Route path="/addAppointment" exact>
                        <AddAppointment user={user}/>
                    </Route>
                    <Route path="/approvedAppointments" exact>
                        <ApprovedAppointments user={user}/>
                    </Route>
                    <Route path="/pendingAppointments" exact>
                        <PendingAppointments user={user}/>
                    </Route>
                    <Route path="/newPatient" exact>
                        <NewPatient user={user}/>
                    </Route>
                    <Route path="/allPatients" exact>
                        <AllPatients user={user}/>
                    </Route>
                    <Route path="/makePayment" exact>
                        <MakePayment user={user}/>
                    </Route>
                    <Route path="/allPayments" exact>
                        <AllPayments user={user}/>
                    </Route>
                    <Route path="/billingReports" exact>
                        <BillingReport user={user}/>
                    </Route>
                    <Route path="/treatmentReports" exact>
                        <TreatmentReport user={user}/>
                    </Route>
                    <Route path="/labReports" exact>
                        <LabReport user={user}/>
                    </Route>
                    <Route path="/drugReports" exact>
                        <DrugDispensingReport user={user}/>
                    </Route>
                    <Route path="/profile" exact>
                        <Profile user={user}/>
                    </Route>
                    </> }
                </Router>  : <Redirect to="/" />}
            </div>
        </div> 
    )
}
