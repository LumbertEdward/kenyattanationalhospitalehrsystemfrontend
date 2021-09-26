import {react, useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import AdminLoginPage from "./pages/adminloginpage/adminloginpage";
import Dashboard from "./pages/dashboards/dashboard";
import LoadingPage from "./pages/loadingpage/loading";
import Login from "./pages/loginpage/loginpage";
import RegisterPage from "./pages/registerpage/registerpage";
import StaffDashbaord from "./pages/staffdashboard/staffdashbaord";

function App() {
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          { loading ? <LoadingPage type="bars" color="blue"/> : <Login /> }
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/admin/login" exact>
          <AdminLoginPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
