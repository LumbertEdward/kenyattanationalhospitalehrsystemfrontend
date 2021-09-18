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

    useEffect(() => {
        if (location.state.userDetails.username != null) {
            setUsername(location.state.userDetails.username);
        }
        else{
            history.push({pathname: "/"});
        }
    }, {})
    return (
        <div className="dashContainer">
            <div className="dashInner">
                <Router>
                    <Sidebar />
                    <Route path="/dashboard/" exact>
                        <Body />
                    </Route>
                    <Route path="/view" exact>
                        <ViewStaff />
                    </Route>
                    <Route path="/edit" exact>
                        <EditStaff />
                    </Route>
                    <Route path="/activated" exact>
                        <ActivatedAccounts />
                    </Route>
                    <Route path="/pending" exact>
                        <PendingAccounts />
                    </Route>
                    <Route path="/suspended" exact>
                        <Suspended />
                    </Route>
                </Router>
            </div>
        </div>
    )
}
