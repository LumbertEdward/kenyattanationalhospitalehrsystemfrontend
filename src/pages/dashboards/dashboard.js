import {react, useState, useEffect} from 'react'
import { useHistory, useLocation } from 'react-router'

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
        <div>
            <h1>{`Welcome home ${username}`}</h1>
        </div>
    )
}
