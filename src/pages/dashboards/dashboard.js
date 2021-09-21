import {react, useState, useEffect} from 'react'
import { useHistory, useLocation } from 'react-router'
import { ActivatedAccounts, Body, PendingAccounts, Sidebar, Suspended, ViewStaff } from '../../components';
import './dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
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
                <Router>
                    <Sidebar user={user}/>
                    {user.username == "admin" ? <><Route path="/dashboard/" exact>
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
                    </Route></> : null}
                </Router>
            </div>
        </div> 
    )
}
